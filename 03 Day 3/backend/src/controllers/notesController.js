export const getAllNotes = (req, res) => {
    res.status(200).send("You have 15 notes");
}

export function createNote(req, res) {
    res.status(201).json({message:"Note added successfully"});
}

// Both are the same

export async function updateNote(req, res) {
    res.status(200).json({message:"Note updated successfully"});
}