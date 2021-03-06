import { RefObject } from "react";

import styles from "../styles/Image.module.scss";

export interface IImageProps {
  alt: string;
  src?: string;
  loading: boolean;
  iamgeRef?: RefObject<HTMLImageElement>;
  variant?: "mystery" | "matched";
}

const Image = ({ alt, loading, src, iamgeRef, variant }: IImageProps) => {
  const className =
    variant &&
    (variant === "mystery" ? styles.imageMystery : styles.imageMatched);
  return (
    <div className={styles.imageWrapper}>
      {loading && (
        <div className={`${styles.loading} ${className ?? ""}`}>
          <div className={styles.loadingRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <img
        className={`${styles.image} ${loading ? styles.loadingImage : ""} ${
          className ?? ""
        }`}
        alt={alt}
        ref={iamgeRef}
        src={src}
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default Image;
