export default function ContainerWrapper({ children }) {
  const points = 100;
  const frequency = 1;
  const unit = (2 * Math.PI * frequency) / points;
  const phase = 270;
  const amplitude = 9;
  const height_px = 380;

  const offset = 370;
  let radPhase = (phase * Math.PI) / 180;
  let path = "";
  for (let i = 0; i <= points; i++) {
    let val = offset + amplitude * Math.cos(i * unit + radPhase);
    let valX = ((val / height_px) * 100).toFixed(2);
    let valY = ((i * 100) / points).toFixed(2);
    path += `, ${valX}% ${valY}%`;
  }
  const clipPath = `0 100%, 0 0 ${path}`;
  return (
    <div
      className="rounded-l-[10%] bg-white "
      style={{
        clipPath: `polygon(${clipPath})`,
      }}
    >
      {children}
    </div>
  );
}
