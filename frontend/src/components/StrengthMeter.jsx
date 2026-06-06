export default function StrengthMeter({
  score
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h3 className="mb-4 text-xl font-semibold">
        Resume Strength
      </h3>

      <div className="h-4 w-full overflow-hidden rounded-full bg-gray-700">

        <div
          className="h-full bg-gradient-to-r from-green-400 to-green-600"
          style={{
            width: `${score}%`
          }}
        />

      </div>

      <p className="mt-4 text-3xl font-bold text-green-400">
        {score}%
      </p>

    </div>
  );
}