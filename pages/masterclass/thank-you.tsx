import { PageLayout } from "@/components";
import { ReactElement } from "react";
import { ChosenHeader } from "@/components/PageLayout/PageLayout";
import { useRouter } from "next/router";
import useCountdownTimer from "@/hooks/useCountdownTimer";

export default function MasterclassTankYou() {
  const router = useRouter();
  const timer = useCountdownTimer(1);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <div>
        <h1>Countdown Timer</h1>
        <h2>{formatTime(timer.seconds)}</h2>
        {timer.completed && <h2>Timer completed!</h2>}
      </div>
    </>
  );
}

MasterclassTankYou.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout
      chosenHeader={ChosenHeader.FOR_MASTERCLASS}
      hideBlueSection={true}
    >
      {page}
    </PageLayout>
  );
};
