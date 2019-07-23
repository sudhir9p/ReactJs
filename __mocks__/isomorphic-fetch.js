// import jest from 'jest';
let __value = [];
const isomorphicFetch = jest.fn(()=>__value);
isomorphicFetch.__setValue = v=> __value = v;
export default isomorphicFetch;