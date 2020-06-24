import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$$$')} title="Mais caros" />
        <ResultsList results={filterResultsByPrice('$$')} title="Cabe no bolso" />
        <ResultsList results={filterResultsByPrice('$')} title="Mais baratos" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
    container: {

    }
});

export default SearchScreen;
