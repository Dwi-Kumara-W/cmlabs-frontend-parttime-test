import { SearchInput } from "../atoms/SearchInput";

export const SearchBar = ({ onChange, placeholder }: any) => (
  <div className="relative max-w-xl mb-12 group">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <svg className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <SearchInput onChange={onChange} placeholder={placeholder} />
  </div>
);