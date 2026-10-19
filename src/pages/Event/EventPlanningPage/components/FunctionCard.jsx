/**
 * FunctionCard
 * Matches the reference design: a rounded card with a bold accent border
 * on the left, a bold function name, and a date/time line underneath.
 * No icon.
 *
 * Selected  -> thick maroon left border + light pink background + maroon text
 * Unselected -> thin gray left border + white background + gray/muted text
 *
 * NOTE: field names below are guesses based on how EventPlanningPage calls
 * this component (`functionData={func}`). Adjust the `name`, `date`, and
 * `time` extraction to match your actual eventFunctions shape if different
 * (e.g. func.functionDate / func.startTime, or func.dateTime, etc).
 */
const FunctionCard = ({ functionData, isSelected }) => {
  const name =
    functionData?.function?.nameEnglish ||
    functionData?.nameEnglish ||
    functionData?.functionName ||
    "Function";

  const dateTimeSource =
    functionData?.functionStartDateTime ||
    functionData?.eventStartDateTime ||
    functionData?.dateTime ||
    "";

  const date =
    functionData?.functionDate ||
    functionData?.date ||
    dateTimeSource?.split(" ")?.[0] ||
    "";

  const time =
    functionData?.startTime ||
    functionData?.time ||
    dateTimeSource?.split(" ")?.[1] ||
    "";

  return (
    <div
      className={`min-w-[200px] px-4 py-2.5 rounded-lg border-l-4 transition-colors
        ${
          isSelected
            ? "bg-[#fdf1f3] border-l-primary"
            : "bg-gray-50 border-l-gray-300"
        }`}
    >
      <p
        className={`text-sm font-bold leading-tight truncate
          ${isSelected ? "text-primary" : "text-gray-500"}`}
        title={name}
      >
        {name}
      </p>
      {date && (
        <p
          className={`text-xs font-semibold leading-tight mt-1
            ${isSelected ? "text-primary" : "text-gray-400"}`}
        >
          {date}
        </p>
      )}
      {time && (
        <p
          className={`text-xs font-semibold leading-tight
            ${isSelected ? "text-primary" : "text-gray-400"}`}
        >
          {time}
        </p>
      )}
    </div>
  );
};

export default FunctionCard;