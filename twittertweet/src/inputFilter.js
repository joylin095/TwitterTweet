import { Input, Typography, IconButton } from "@material-tailwind/react";

export default function InputFilter({
  user,
  date,
  analytics,
  onUserChange,
  onDateChange,
  onAnalyticsChange,
  onRemove,
}) {
  return (
    <div className="mb-5 flex flex-col gap-6 border-red-400 border-2">
      <Typography variant="small" color="blue-gray" className="-mb-5">
        User
      </Typography>
      <Input
        size="lg"
        placeholder="@joylin095"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        value={user}
        onChange={(e) => onUserChange(e.target.value)}
      />
      <Typography variant="small" color="blue-gray" className="-mb-5 -mt-5">
        Date
      </Typography>
      <Input
        size="lg"
        placeholder="2024-01-01"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
      />
      <Typography variant="small" color="blue-gray" className="-mb-5 -mt-5">
        analytics
      </Typography>
      <Input
        size="lg"
        placeholder="10000"
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        value={analytics}
        onChange={(e) => onAnalyticsChange(e.target.value)}
      />
      <div className=" flex justify-center">
        <IconButton color="red" variant="outlined" onClick={() => onRemove()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
              clipRule="evenodd"
            />
          </svg>
        </IconButton>
      </div>
    </div>
  );
}
