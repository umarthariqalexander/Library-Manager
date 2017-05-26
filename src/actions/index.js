export const SelectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  }
}
