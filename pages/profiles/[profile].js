import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <h2>{username}'s Profile Page</h2>
    </div>
  );
}