import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  const { isLoading } = useAuth();

  if (isLoading) return <> </>;
  return <div>커스텀훅 연습 - 권한분기 연습</div>;
}
