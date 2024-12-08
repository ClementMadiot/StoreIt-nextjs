import Sort from "@/components/Layout/Sort";
import { getFiles } from "@/lib/actions/file.actions";

// interface SearchParamProps {
//   params?: Promise<SegmentParams>;
//   searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
// }

const Page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";

  // make a request to get the files
  const files = await getFiles();

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>

        <div className="total-size-section">
          <p className="body-1">
            Total: <span className="h5">0 MB</span>
          </p>

          {/* Sort the files  */}
          <div className="sort-container">
            <p className="body-1 hidden sm:block text-light-200">Sort by:</p>
            <Sort />
          </div>
        </div>
      </section>

      {/* Render the files  */}
      {files.length > 0 ? (
        <section></section>
      ) : (
        <p className="empty-list">No files uploaded</p>
      )}
    </div>
  );
};

export default Page;
