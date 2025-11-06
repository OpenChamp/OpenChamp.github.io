import Headbar from "../components/Headbar";

export default function PatchNotes() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-200">
      <Headbar />

      {/* Header */}
      <div className="bg-gradient-to-b from-stone-950 to-stone-900 border-b border-stone-800 py-8 px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-2">Patch Notes</h1>
          <p className="text-stone-400">
            Latest updates and changes to the game
          </p>
        </div>
      </div>

      {/* Patch Notes List */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="space-y-6">
          <div className="text-center text-stone-400 py-12">
            Patch notes coming soon.
          </div>
        </div>
      </div>
    </main>
  );
}
