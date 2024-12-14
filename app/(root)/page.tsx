import FormattedDateTime from "@/components/card/FormattedDateTime";
import { Chart } from "@/components/Layout/Chart";
import { getFiles, getTotalSpaceUsed } from "@/lib/actions/file.actions";
import { convertFileSize, getUsageSummary } from "@/lib/utils";
import Image from "next/image";

export default async function Dashboard() {
  // Parallel Fetching
  const [files, totalSpace] = await Promise.all([
    getFiles({ types: [], limit: 10 }),
    getTotalSpaceUsed(),
  ]);

  // Get usage summary
  const usageSummary = getUsageSummary(totalSpace);

  return (
    <div className="dashboard-container">
      <Chart used={totalSpace.used} />
      <section className="dashboard-summary-list">
        {usageSummary.map((sum) => (
          <div key={sum.title} className="dashboard-summary-card">
            <Image
              src={sum.icon}
              alt={sum.title}
              className="summary-type-icon"
              width={24}
              height={24}
            />
            <p className="summary-type-size">{convertFileSize(sum.size)}</p>
            <div className="text-center space-y-4">
              <p className="summary-type-title mt-2">{sum.title}</p>
              <div className="w-full h-[2px] bg-light-300 my-4" />
              <p className="body-1 text-light-200">Last update</p>
              <FormattedDateTime
                date={sum.latestDate}
                className="body-2 text-light-100"
              />
            </div>
          </div>
        ))}
      </section>
      <section className="dashboard-recent-files">
        <h2 className="h2">Recent Files Uploaded</h2>
        <div className="dashboard-recent-files">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/icons/file-image.svg"
              alt="file"
              width={20}
              height={20}
            />
            {/* Render recent files here */}
          </div>
        </div>
      </section>
    </div>
  );
}
