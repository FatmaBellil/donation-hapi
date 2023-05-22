
import { Candidate } from "./candidate.js";

export const candidateMongoStore = {
  async getAllCandidates() {
    const candidates = await Candidate.find().lean();
    return candidates;
  },

  async findById(id) {
    const candidate = await Candidate.findOne({ _id: id }).lean();
    return candidate;
  },

  async findByName(lastName, firstName) {
    const candidate = await Candidate.findOne({
      lastName,
      firstName,
    });
    return candidate;
  },
  async donate(amount, method, donor, candidate, lat, lng) {
    const newDonation = new Donation({
      amount,
      method,
      donor: donor._id,
      candidate: candidate._id,
      lat,
      lng,
    });
    await newDonation.save();
    return newDonation;
  },
};
