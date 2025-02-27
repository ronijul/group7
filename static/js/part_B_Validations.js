document.addEventListener('DOMContentLoaded', () => {

    //בדיקות ולידציה לטופס הרשמה
    const signUpForm = document.querySelector('#signUpForm')
    const SignUpPhone = document.querySelector('#SignUpPhone')
    const SignUpEmail = document.querySelector('#SignUpEmail')
    const SignUpPassword = document.querySelector('#SignUpPassword')
    const confirmPassword = document.querySelector('#confirmPassword')

    const isPhoneValid = (phone) => {
        const phonePattern = /^(\+972|0)?[5][0-9]{8}$/; // דוגמת טלפון ישראלי
        return phonePattern.test(phone); // מחזיר true אם המספר תקין
    };
    const isEmailValid = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ביטוי רגולרי לתבנית אימייל
        return emailPattern.test(email); // מחזיר true אם האימייל תקין
    };
    const isPasswordValid = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordPattern.test(password); // מחזיר true אם הסיסמה תקינה
    };
    const isConfirmPasswordValid = (confirmPassword) => {
        return SignUpPassword.value === confirmPassword;

    }
    const isidNumberValid = (idNumber) => {
        const idNumberPattern = /^[0-9]{9}$/;

        // מחזיר true רק אם הערך עומד בדרישות
        return idNumberPattern.test(idNumber);

    }

    const onSignUpSubmit = (e) => {
        e.preventDefault()
        if (!isPhoneValid(SignUpPhone.value)) {
            alert('מספר הטלפון שהוזן אינו תקין!');
            return;
        }

        // בדיקת אימייל
        if (!isEmailValid(SignUpEmail.value)) {
            alert('כתובת האימייל שהוזנה אינה תקינה!');
            return;
        }

        // בדיקת סיסמה
        if (!isPasswordValid(SignUpPassword.value)) {
            alert('הסיסמה אינה עומדת בדרישות (לפחות 8 תווים, אות גדולה, אות קטנה ומספר וללא סימנים מיוחדים).');
            return;
        }
        if (!isConfirmPasswordValid(confirmPassword.value)) {
            alert('הססמאות אינן תואמות).');
            return;
        }

        // אם הכל תקין
        alert('ההרשמה בוצעה בהצלחה!');
        // אפשר להוסיף שליחת הנתונים לשרת כאן
    };

    signUpForm.addEventListener('submit', onSignUpSubmit);

    //בדיקות ולידציה לטופס הקופה
    const CashBoxForm = document.querySelector('#CashBoxForm')
    const OrderPhone = document.querySelector('#OrderPhone')
    const OrderEmail = document.querySelector('#OrderEmail')
    const idNumber = document.querySelector('#idNumber')

    const onCashBoxSubmit = (e) => {
        e.preventDefault()

        if (!isEmailValid(OrderEmail.value)) {
            alert('כתובת האימייל שהוזנה אינה תקינה!');
            return;
        }

        if (!isPhoneValid(OrderPhone.value)) {
            alert('מספר הטלפון שהוזן אינו תקין!');
            return;
        }

        if (!isidNumberValid(idNumber.value)) {
            alert('על תעודת הזהות להכיל 9 ספרות!');
            return;
        }

        alert('ההזמנה התקבלה!');
    }
    CashBoxForm.addEventListener('submit', onCashBoxSubmit);

    //בדיקות ולידציה לטופס יצירת קשר

    const contactUsForm = document.querySelector('#contactUsForm')
    const ContactEmail = document.querySelector('#ContactEmail')

    const onContactUsSubmit = (e) => {
        e.preventDefault()

        if (!isEmailValid(ContactEmail.value)) {
            alert('כתובת האימייל שהוזנה אינה תקינה!');
            return;
        }
    }
    contactUsForm.addEventListener('submit', onContactUsSubmit);
});


