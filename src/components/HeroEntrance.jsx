import HudRings from "./HudRings";
import ThreeScene from "./ThreeScene";

/*
 * Character: Ironclad Vox
 * Theme/Colors: armored tech genius | accent red + accent gold
 * Page: Start
 * Signature: Vox's signature repulsor-trail and chest-core pulse animation powers the landing core.
 */
export default function HeroEntrance() {
  return (
    <div className="relative grid place-items-center">
      <HudRings size={460} className="hidden sm:grid" />
      <HudRings size={320} className="grid sm:hidden" />
      <ThreeScene />
    </div>
  );
}
