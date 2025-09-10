'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import SignupModal from './SignupModal';
import { useSession } from 'next-auth/react';

export default function Comments({ slug }) {
  const { data: session, status } = useSession(); // ✅ get status
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [posting, setPosting] = useState(false);

  const fetchComments = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/comments/${slug}`);
      setComments(res.data);
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [slug]);

  const handleCommentSubmit = async () => {
    if(posting) return;

    setPosting(true);

    if (!newComment.trim()) {
      setCommentError(true);
      return;
    }

    setCommentError(false);

    if (!session || !session.user?.email) {
      setShowModal(true); // 🔒 trigger modal
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/comments`,
        {
          slug,
          content: newComment,
          email: session.user.email, // ✅ pass user's email
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setNewComment('');
      fetchComments();
    } catch (err) {
      console.error('Full error:', err);
      if (err.response) {
        console.error('Response:', err.response.data);
      }
    } finally {
      setPosting(false);
    }
  };

  return (
    <div className="bg-gray-50 max-w-4xl mx-auto px-6 py-8" data-aos="fade-up">
      <h4 className="text-lg font-semibold mb-2">Leave a comment</h4>
      <textarea
        rows={4}
        className={`w-full p-3 border rounded mb-1 ${
          commentError ? 'border-red-500' : 'border-gray-300'
        }`}
        placeholder="Write your comment..."
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
          if (commentError) setCommentError(false);
        }}
      />
      {commentError && (
        <p className="text-red-500 text-sm mb-2">Please write something before posting.</p>
      )}
      <button
        className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800"
        onClick={handleCommentSubmit}
        disabled={posting}
      >
        {posting ? 'Posting...' : 'Post Comment'}
      </button>

      <SignupModal show={showModal} onClose={() => setShowModal(false)} />

      <div className="mt-10">
        <h5 className="text-md font-semibold mb-2">Comments</h5>
        {comments.length === 0 && <p className="text-gray-500">No comments yet.</p>}
        {comments.map((comment, i) => (
          <div key={i} className="p-3 mb-2 border rounded">
            <p className="text-sm">{comment.text}</p>
            {comment.userEmail && (
              <p className="text-xs text-blue-600 mb-1">{comment.userEmail}</p>
            )}
            <span className="text-xs text-gray-400">
              {new Date(comment.createdAt).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
