import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectMenus = () => {
  return (
    <div className="flex items-center gap-5 justify-between mt-10">
      <div className="w-full">
        <Select>
          <SelectTrigger className="w-full py-5">
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="mogadishu">Mogadishu</SelectItem>
              <SelectItem value="jowhar">Jowhar</SelectItem>
              <SelectItem value="afgoi">Afgoi</SelectItem>
              <SelectItem value="pumpkin">Bidao</SelectItem>
              <SelectItem value="sunflower">Kismaayo</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full">
        <Select>
          <SelectTrigger className="w-full py-5">
            <SelectValue placeholder="All Departments" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="customer-care">Customer Care</SelectItem>
              <SelectItem value="marketting">Marketting</SelectItem>
              <SelectItem value="isp">ISP</SelectItem>
              <SelectItem value="regional">Regional</SelectItem>
              <SelectItem value="information-communication-technology(ict)">
                Information Communication Technology(ICT)
              </SelectItem>
              <SelectItem value="sesame">Finance & Accounting</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectMenus;
