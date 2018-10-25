export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // store database in firestore
    const firestore = getFirestore();
    // get state gives us state object where we can fetch
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    // get collection
    firestore
      .collection('projects')
      .add({
        // use data from parameter project (where title is from createProject component)
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};
