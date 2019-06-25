export class SearchUtils {
    static sortMovies = (type, currentList) => {
        let sortResult = currentList.sort((a, b) => {
            if (a[type] > b[type]) {
                return 1
            } else if (a[type] < b[type]) {
                return -1
            }
        })
        return sortResult;
    }
}