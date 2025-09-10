import Subscriber from '../models/Subscriber.js';

export const getSubscribers = async (req, res) => {
  console.log('📡 getSubscribers() hit');
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    console.error('❌ Error fetching subscribers:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

export const addSubscriber = async (req, res) => {
    try {
        const subscriber = new Subscriber(req.body);
        await subscriber.save();
        res.status(201).json(subscriber);
    } catch (error) {
        res.status(400).json({ message: 'Email already subscribed' });
    }
};
