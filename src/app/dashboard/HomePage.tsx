import MapView from "@/components/MapView";
import HealthStats from "@/components/HealthStats";

export default function HomePage() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <MapView  />
      </div>
      <HealthStats bpm={78} spo2={97} temperature={36.5} stressLevel={45} />
    </div>
  );
}
