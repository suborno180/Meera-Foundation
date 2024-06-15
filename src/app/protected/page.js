import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const ProtectedPage = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    // Redirect to login if no token is found
    return <div>Access Denied</div>;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return <div>Welcome {decoded.email}</div>;
  } catch (error) {
    return <div>Access Denied</div>;
  }
};

export default ProtectedPage;
