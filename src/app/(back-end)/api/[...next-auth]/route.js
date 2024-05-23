import mongoose from 'mongoose';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const MONGODB_URI = process.env.MONGO_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
    voterID: String// Note: For production, you should hash passwords
});

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const user = await User.findOne({ voterID: credentials.voterID });

        

        return { voterID: user.voterID };
      },
    }),
  ],
});
