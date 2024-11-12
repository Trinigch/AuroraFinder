import { Request, Response } from 'express';
import { History } from '../models/history.js';
import { User } from '../models/user.js';

// POST /history
export const createHistory = async (req: Request, res: Response) => {
  const { userId, lat, lon, date, probability } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newHistory = await History.create({
      userId,
      lat,
      lon,
      date,
      probability,
    });

    return res.status(201).json(newHistory);// We add return to guarantee response
  } catch (error: any) {
    return res.status(400).json({ message: error.message }); 
  }
};

// DELETE /history/:id
export const deleteHistoryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const historyEntry = await History.findByPk(id);
    if (!historyEntry) {
      return res.status(404).json({ message: 'History entry not found' });
    }

    await historyEntry.destroy();
    return res.json({ message: 'History entry deleted' }); 
  } catch (error: any) {
    return res.status(500).json({ message: error.message }); 
  }
};

// GET /history/user/:userId
export const getUserHistory = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const userHistory = await History.findAll({
      where: { userId },
    });
    if (!userHistory.length) {
      return res.status(404).json({ message: 'No history entries found for this user' });
    }

    return res.json(userHistory); 
  } catch (error: any) {
    return res.status(500).json({ message: error.message }); 
  }
};