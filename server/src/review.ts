import { Firestore, collection, query, where, getDocs, doc, updateDoc, arrayUnion } from "firebase/firestore";

interface Review {
  noise: number;
  privacy: number;
  convenience: number;
  user: string;
  comment: string;
}

const review = async (db: Firestore, spaceTitle: string, newReview: Review) => {
  const spacesRef = collection(db, 'spaces');
  const q = query(spacesRef, where("title", "==", spaceTitle));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const spaceDoc = querySnapshot.docs[0];
    let spaceData = spaceDoc.data();

    // Add the new review
    let updatedReviews = [...spaceData.reviews, newReview];

    // Recalculate averages
    let totalNoise = updatedReviews.reduce((acc, review) => acc + review.noise, 0);
    let totalPrivacy = updatedReviews.reduce((acc, review) => acc + review.privacy, 0);
    let totalConvenience = updatedReviews.reduce((acc, review) => acc + review.convenience, 0);
    let numReviews = updatedReviews.length;

    let updatedNoiseAvg = totalNoise / numReviews;
    let updatedPrivacyAvg = totalPrivacy / numReviews;
    let updatedConvenienceAvg = totalConvenience / numReviews;

    // Update the document
    await updateDoc(doc(db, 'spaces', spaceDoc.id), {
      noise: updatedNoiseAvg,
      privacy: updatedPrivacyAvg,
      convenience: updatedConvenienceAvg,
      reviews: arrayUnion(newReview)
    });

    return { success: true };
  } else {
    return { success: false, error: 'Space not found' };
  }
};

export { review };
