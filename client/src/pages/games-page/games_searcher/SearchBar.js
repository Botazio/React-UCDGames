import React, { useEffect, useMemo } from 'react';
import { useThrottle } from 'react-use';
import { matchSorter } from 'match-sorter';
import {
   Combobox,
   ComboboxInput,
   ComboboxPopover,
   ComboboxList,
   ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import GamesSearcherCSS from './GamesSearcher.module.css';

export default function SearchBar() {
   const games = false;
   const [term, setTerm] = React.useState("");
   const results = usePlaceMatch(term);
   const handleChange = (e) => setTerm(e.target.value);

   useEffect(() => {
      setTerm("")
   }, []);

   return (
      <Combobox
         onSelect={(address) => {
            setTerm(address);
         }}>
         <ComboboxInput
            className={GamesSearcherCSS.search_bar}
            placeholder="Search..."
            autoComplete="off"
            value={term}
            onChange={handleChange}
         />
         {
            games && (
               <ComboboxPopover style={{ zIndex: 100000 }}>
                  {games.length > 0 ? (
                     <ComboboxList>
                        {games.slice(0, 5).map((result) => (
                           <ComboboxOption
                              key={"suggestion" + result.number}
                              value={result.address}
                           />
                        ))}
                     </ComboboxList>
                  ) : (
                     <span style={{ display: "block", margin: 8 }}>
                        No results found
                     </span>
                  )}
               </ComboboxPopover>
            )
         }
      </Combobox>
   );

   function handleSubmit(result) {
   }

   function usePlaceMatch() {
      const throttledTerm = useThrottle(term, 100);
      /* eslint-disable */
      return useMemo(() =>
         term === "" ? null :
            matchSorter(stations, term, { keys: ['address'] }, { threshold: matchSorter.rankings.STARTS_WITH }),
         [throttledTerm]);
   }
}