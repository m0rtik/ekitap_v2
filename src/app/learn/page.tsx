import ContinueLearning from "@/app/learn/sections/continuelearning";
import Courses from "@/app/learn/sections/courses";

export default function Learn() {
  return (
    <div className="container py-10">
      <div className="space-y-10">
        <ContinueLearning />
        <Courses />
      </div>
    </div>
  );
}
