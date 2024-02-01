import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Proc from './models/procModel.js';
import User from './models/userModel.js';

try {
  await mongoose.connect(process.env.MONGO_URL);
  const user = await User.findOne({ email: 'john@gmail.com' });
  const jsonProcs = JSON.parse(
    await readFile(new URL('./utils/mockData.json', import.meta.url))
  );
  const procs = jsonProcs.map((proc) => {
    return { ...proc, createdBy: user._id };
  });
  await Proc.deleteMany({ createdBy: user._id });
  await Proc.create(procs);
  console.log('Success!!!');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}