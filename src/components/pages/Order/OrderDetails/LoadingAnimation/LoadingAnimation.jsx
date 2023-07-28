import s from './LoadingAnimation.module.scss'

function LoadingAnimation() {
  return (
    <div className={s.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
export default LoadingAnimation;