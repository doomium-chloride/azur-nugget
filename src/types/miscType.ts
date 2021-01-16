import {Ship} from './shipTypes';
import FuzzySearch from 'fuzzy-search';

export interface shipContextType {
    ships: Array<Ship>,
    byNameSearcher: FuzzySearch<Ship>
}