import FunnelPagesContainer from "components/FunnelPagesContainer";
import Image from "next/image";
import styles from "./funnels.style.module.css";
import notebooimg from "@/../public/assets/images/notebook-img.png";
import { useRouter as useNextRouter } from "next/router";
import { useEffect } from "react";

export async function getServerSideProps(context: any) {
  const { params } = context.query;
  const canAccess = params || null;

  return {
    props: {
      canAccess,
    },
  };
}

export default function ThankYouNewsletterPage({ canAccess }: any) {
  const router = useNextRouter();

  useEffect(() => {
    if (canAccess == null) router.push("/");
  });

  return (
    <>
      {canAccess !== null ? (
        <FunnelPagesContainer>
          <h1 className={styles.funnels_pages__title}>You did it!</h1>
          <p className={styles.funnels_pages__paragraph}>
            You successfully registered to our Newsletter - whoop whoop! You
            will now receive news and updates from Growing Abroad.
          </p>
          <Image
            className={styles.funnels_pages__img}
            src={notebooimg.src}
            alt="two guys cheering"
            height={400}
            width={718}
          />
        </FunnelPagesContainer>
      ) : <h1 className={styles.funnels_pages__title}>You need to register first.!</h1>}
    </>
  );
}
