import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  return <div>user {router.query.id}</div>;
}
