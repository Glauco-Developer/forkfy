import Search from './models/Search';

// Global state
const state = {};

const controlSearch = async () => {
    // Get query from view
    const query = 'pizza';

    if(query) {
        // New search object and add to state
        state.search = new Search(query);
        
        // Prepare UI for results
        
        // Search for recipes
        await state.search.getResults();

        // Render results on UI
        console.log(state.search.result)
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});