let nextCommentId = 1;
export const AddComment = (name, text) => {
    return {
      type: "ADD_COMMENT",
      id: nextCommentId++,
      name,
      text,
    };
}

export const DeleteComment = (id) => {
    return{
        type : 'DELETE_COMMENT',
        id,
    }
}