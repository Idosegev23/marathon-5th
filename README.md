# מרתון אנגלית קיץ GEN-Z

דף נחיתה למרתון אנגלית לילדים שעולים לכיתה ז׳, בהנחיית אילנית ליבוביץ שגב.

## תיאור הפרויקט

מרתון אנגלית מיוחד הכולל:
- 6 מפגשים ממוקדים (75 דקות כל אחד)
- קבוצות קטנות של 5 ילדים בלבד
- הכנה מושלמת לכיתה ז׳ באנגלית
- גישה חווייתית ודינמית

## טכנולוגיות

- **Next.js 15** - מסגרת React מתקדמת
- **TypeScript** - טיפוסים חזקים
- **Tailwind CSS** - עיצוב מהיר ומודרני
- **Framer Motion** - אנימציות חלקות
- **React Icons** - אייקונים מעוצבים

## התקנה והרצה

### התקנת Dependencies

```bash
npm install
```

### הרצה במצב פיתוח

```bash
npm run dev
```

האתר יהיה זמין בכתובת: [http://localhost:3000](http://localhost:3000)

### בנייה לפרודקשן

```bash
npm run build
```

### הרצה במצב פרודקשן

```bash
npm start
```

## מבנה הפרויקט

```
englishmarathon/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── HeroSection.tsx
│       ├── AboutMarathonSection.tsx
│       ├── WhatWillLearnSection.tsx
│       ├── ForWhoSection.tsx
│       ├── AboutTeacherSection.tsx
│       ├── LogisticsSection.tsx
│       ├── RegistrationSection.tsx
│       └── Footer.tsx
├── public/
└── package.json
```

## עריכת תוכן

### עדכון פרטי קשר

עדכנו את מספרי הטלפון והווטסאפ בקבצים הבאים:
- `src/components/Header.tsx`
- `src/components/RegistrationSection.tsx` 
- `src/components/Footer.tsx`

### עדכון המחיר

עדכנו את המחיר ב:
- `src/components/LogisticsSection.tsx`

### הוספת תמונות

הוסיפו תמונות לתיקיית `public/` ועדכנו את הקומפוננטים בהתאם.

## פיצ'רים

✅ עיצוב רספונסיבי לכל הגדלי מסך  
✅ אנימציות חלקות וייחודיות  
✅ טופס הרשמה פונקציונלי  
✅ אופטימיזציה למנועי חיפוש  
✅ תמיכה מלאה בעברית (RTL)  
✅ כפתורי קשר ישירים (וואטסאפ וטלפון)  

## רישיון

© 2024 אילנית ליבוביץ שגב - כל הזכויות שמורות 