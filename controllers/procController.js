import Proc from '../models/procModel.js';
import {StatusCodes} from 'http-status-codes';
import mongoose from 'mongoose';
// import day from 'day.js';


export const getAllProcs = async (req, res) => {
    res.send('get all procs');
}

export const getProc = async (req, res) => {
    res.send('get proc');
}

export const createProc = async (req, res) => {
    res.send('create proc');
}

export const updateProc = async (req, res) => {
    res.send('update proc');
}

export const deleteProc = async (req, res) => {
    res.send('delete proc');
}

