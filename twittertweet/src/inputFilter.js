import { Input, Typography } from "@material-tailwind/react";

export default function InputFilter({
  user,
  date,
  analytics,
  onUserChange,
  onDateChange,
  onAnalyticsChange,
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
    </div>
  );
}
