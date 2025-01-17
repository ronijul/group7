document.addEventListener('DOMContentLoaded', () => {
    // בוחרים את כל הכפתורים והקטגוריות
    const categoryButtons = document.querySelectorAll('.PetCategories'); // כפתורים
    const scrollContainers = document.querySelectorAll('.scroll-container'); // קטגוריות
    const categoryTitle = document.querySelectorAll('.CategoryTitle');


    // הוספת מאזין לכל כפתור
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log(`Button clicked: ${button.id}`); // דיבוג: הצגת ה-id של הכפתור שנלחץ

            // הסתרת כל הקטגוריות
            scrollContainers.forEach(container => {
                container.style.display = 'none'; // הסתרת כל הקטגוריות
            });

            // זיהוי הקטגוריה המתאימה לפי id הכפתור
            const targetId = `scroll-${button.id}`;
            const targetContainer = document.getElementById(targetId);


            if (targetContainer) {
                console.log(`Category found: ${targetId}`); // דיבוג: הצגת ה-id של הקטגוריה שנמצאה
                targetContainer.style.display = 'grid'; // הצגת הקטגוריה הנבחרת
            } else {
                console.error(`Category not found: ${targetId}`); // דיבוג: שגיאה אם הקטגוריה לא נמצאה
            }


        });
    });
    // הוספת מאזין לכל כפתור
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log(`Button clicked: ${button.id}`); // דיבוג: הצגת ה-id של הכפתור שנלחץ

            categoryTitle.forEach(button => {
                button.style.display = 'none'; // הסתרת כל הקטגוריות
            });
            const titleID = `Title-${button.id}`;
            const TargetTitle = document.getElementById(titleID);

            // הצגת הכותרת המתאימה
            if (TargetTitle) {
                console.log(`Title found: ${titleID}`); // דיבוג: הצגת ה-id של הכותרת שנמצאה
                TargetTitle.style.display = 'block'; // הצגת הכותרת הנבחרת
            } else {
                console.error(`Title not found: ${titleID}`); // דיבוג: שגיאה אם הכותרת לא נמצאה
            }


        });
    });
});


