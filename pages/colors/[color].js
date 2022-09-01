import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const { color } = router.query;
  return (
    <div style={{
        color: color
    }}>
      <h2>{color}'s Profile Page</h2>
    </div>
  );
}