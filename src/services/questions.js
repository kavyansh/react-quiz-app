import supabase from "./supabase";

export async function getAllQuestions() {
  let { data: questions, error } = await supabase.from("questions").select("*");

  if (error) {
    throw new Error("Questions could not be fetched!");
  }

  return questions;
}

export async function addQuestion(question) {
  const { data, error } = await supabase
    .from("questions")
    .insert([question])
    .select();
  if (error) {
    throw new Error("Questions could not be added!");
  }
  return data;
}
