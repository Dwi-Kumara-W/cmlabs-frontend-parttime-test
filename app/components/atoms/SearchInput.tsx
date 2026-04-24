interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const SearchInput = ({ onChange, placeholder }: SearchInputProps) => (
  <input 
    type="text" 
    placeholder={placeholder}
    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-100 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-4 focus:ring-orange-100 focus:border-orange-500 border-2 border-transparent outline-none transition-all shadow-sm"
    onChange={onChange}
  />
);