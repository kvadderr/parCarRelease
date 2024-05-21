
# carSharing

## Getting Started

## Step 1: Start the Metro Server

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: 
### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

# Структура папок файлов

За основу  берем FSD, однако можно немного отоходить. О причинах указывать в коментарии index  файла.   
При найменге не экономить на символах писать интуетивно понятные имена. kebab‑case.

app
pages/
+ Page1/
   components/
      name/ -- если компнент большой ( выше 500 строк) выводить в отдельную папку и  декомпозировать
           - index.tsx  
           - styles.css
     - name.tsx
     - index.tsx
     - styles.css
  - index.tsx
  - helpers.tsx
  - hooks.tsx
  - type.ts
common
   -  ui/
      + name/
         - index
         - styles.css
      - index.tsx
      - helpers.tsx
      - hooks.tsx
      - type.ts  
   - widgets/
      + name/
         component/
            - index.tsx
            - styles.css
         - index.tsx
         - helpers.tsx
         - hooks.tsx
         - type.ts  
   ...         
index.tsx (entry point)

Если component, ui, type, mock data  небольшой (до 50 строк),
то НЕ ВЫНОСИТЬ  в отдельный файл можно описать ниже общего кода.
 Файл назвать именем экспортируемого компонета.

   -components
      header-user-info.tsx


      