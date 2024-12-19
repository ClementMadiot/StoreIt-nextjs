import ActionsDropdown from "@/components/card/ActionsDropdown";
import FormattedDateTime from "@/components/card/FormattedDateTime";
import { Chart } from "@/components/Layout/Chart";
import Thumbnail from "@/components/Layout/Thumbnail";
import { getFiles, getTotalSpaceUsed } from "@/lib/actions/file.actions";
import { convertFileSize, getUsageSummary } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Models } from "node-appwrite";

const Dashboard = async () => {
  // Parallel Fetching
  const [files, totalSpace] = await Promise.all([
    getFiles({ types: [], limit: 10 }),
    getTotalSpaceUsed(),
  ]);
  // console.log(files);

  // Get usage summary
  const usageSummary = getUsageSummary(totalSpace);

  return (
    <div className="dashboard-container">
      <section>
        <Chart used={totalSpace.used} />

        {/* Summary list */}
        <ul className="dashboard-summary-list">
          {usageSummary.map((sum) => (
            <Link
              href={sum.url}
              key={sum.title}
              className="dashboard-summary-card"
            >
              <div className="space-y-4">
                <div className="flex justify-between gap-3">
                  <Image
                    src={sum.icon}
                    alt={sum.title}
                    className="summary-type-icon"
                    width={24}
                    height={24}
                  />
                  <h4 className="summary-type-size">
                    {convertFileSize(sum.size) || 0}
                  </h4>
                </div>

                <div className="text-center space-y-4">
                  <p className="summary-type-title mt-2">{sum.title}</p>
                  <div className="w-full h-[2px] bg-light-400 my-4" />
                  <p className="body-1 text-light-200">Last update</p>
                  <FormattedDateTime
                    date={sum.latestDate}
                    className="body-2 text-light-100"
                  />
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </section>
      {/* Recent files uploaded */}
      <section className="dashboard-recent-files">
        <h2 className="h3 xl:h2 text-light-100">Recent Files Uploaded</h2>
        {files.documents.length > 0 ? (
          <ul className="mt-5 flex flex-col gap-5">
            {files.documents.map((file: Models.Document) => (
              <Link
                key={file.$id}
                href={file.url}
                target="_blank"
                className="flex items-center gap-3"
              >
                {/* file image  */}
                <Thumbnail
                  type={file.type}
                  extension={file.extension}
                  url={file.url}
                />

                <div className="recent-file-details">
                  <div className="flex flex-col gap-1">
                    <p className="recent-file-name">{file.name}</p>
                    <FormattedDateTime
                      date={file.$updatedAt}
                      className="caption"
                    />
                  </div>
                  <ActionsDropdown file={file} />
                </div>
              </Link>
            ))}
          </ul>
        ) : (
          <p className="empty-list">No files uploaded yet.</p>
        )}
      </section>
    </div>
  );
}

export default Dashboard;