# Навык: Промпты для изображений бестиария (RU)

**Назначение:** Генерация иллюстраций монстров для D&D 5e24 бестиария «Город Тысячи Воронов» на anymodel.org (GPT Image 2.5).  
**Язык:** Русский (все надписи на картинках — по-русски).  
**Композиция:** существо слева, его описание справа.  
**Стиль:** Noir Fantasy — вечный дождь, вороны, монохром + сепия/золото, киараскурро, готический ужас.

---

## Общий Negative Prompt (для всех монстров)

```
цветной, яркие цвета, насыщенный, мультяшный, аниме, плоское освещение, счастливый, весёлый, солнечный, дневной свет, чистый, современный, киберпанк, неон, пластик, глянцевый, низкая детализация, размытый, деформированный, уродливый, плохая анатомия, лишние конечности, отсутствующие конечности, водяной знак, текст, подпись, логотип, рамка, граница, обрезка, низкое качество, артефакты JPEG, шум, зерно, перенасыщенность, HDR, свечение, блик объектива, боке, глубина резкости, виньетка, хроматическаяaberration
```

---

## Формат промпта для бестиария

```
Bestiary illustration for D&D 5e monster "Имя" (Name), size type, CR X.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet cobblestones reflecting dim lantern light.

Monster appearance: [описание внешности на русском].

Composition: Creature on the LEFT side (60% of image). Description text panel on the RIGHT side (40% of image) in Russian (Cyrillic). Gothic background with rain and crows. Dramatic chiaroscuro lighting from single source. Wet textures, detailed anatomy.

RIGHT PANEL FORMAT (MANDATORY, IDENTICAL FOR ALL MONSTERS — MATCH DOPPELGANGER EXAMPLE EXACTLY):
- Clean rectangular panel on right 40% of image, thin sepia/gold (#c9b896) border, 2px
- Background: semi-transparent dark grey (rgba(0,0,0,0.85)) with subtle paper/texture noise
- Top: Monster name in CYRILLIC UPPERCASE (e.g. "ДОППЕЛЬГАНГЕР"), serif font (Cinzel/Trajan style), gold #c9b896, centered
- Below name: thin horizontal divider line, gold #c9b896, 1px, 80% width
- Stats block (4 lines): CR X, Size, Type, Alignment — each line: LABEL in gold, VALUE in white, left-aligned with padding
  Format: "CR 3" / "SIZE: MEDIUM" / "TYPE: MONSTROSITY" / "ALIGNMENT: НЕЙТРАЛЬНО-ЗЛОЙ"
- Divider line after stats
- Description text: justified paragraphs, white/light grey serif font, 1.4 line height, 15% padding from edges
- Divider line before abilities
- Ability scores: 6 columns with CYRILLIC headers (СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР), values below each, gold headers, white values, monospace font
- Bottom: small "MM24" source tag, gold, right-aligned
- NO decorative frames, NO ornate corners, NO varying border styles — strict clean D&D 5e character sheet aesthetic

Color palette: primarily black, white, greys, with muted sepia/gold (#c9b896) highlights on eyes, metal, magical effects. No bright colors.

Style references: Gustave Doré engravings, Mike Mignola heavy shadows, noir comic aesthetics, Victorian gothic horror. High detail, masterpiece quality, 8k resolution.

TEXT REQUIREMENTS (CRITICAL): 
- ALL TEXT ON IMAGE MUST BE IN RUSSIAN (CYRILLIC ALPHABET ONLY)
- NO ENGLISH WORDS ANYWHERE: not in name, not in stats labels, not in description, not in ability abbreviations
- Ability headers: СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР (NOT STR DEX CON INT WIS CHA)
- Alignment in Russian: ЛАЙФУЛ-ЗЛОЙ / ХАОТИЧНО-ЗЛОЙ / НЕЙТРАЛЬНО-ЗЛОЙ / etc.
- Size in Russian: MАЛЕНЬКИЙ / СРЕДНИЙ / БОЛЬШОЙ / ОГРОМНЫЙ / etc.
- Type in Russian: БЕССМЕРТНЫЙ / ЗВЕРЬ / ГУМАНОИД / АБЕРРАЦИЯ / МОНСТРОЗНОСТЬ / РАСТЕНИЕ / УДОЙ / ДРАКОН / etc.
```

⚠️ **ПРАВИЛА ГЕНЕРАЦИИ (НАРУШЕНИЕ = ПЕРЕГЕНЕРАЦИЯ):**
1. **ПЕРЕД КАЖДОЙ ГЕНЕРАЦИЕЙ:** Проверить, что выбрана модель **GPT Image 2.5** (кнопка показывает "GPT Image 2.5 работает")
2. **ТОЛЬКО ПРОМПТ МЕНЯТЬ** — настройки (aspect 2:3, quality, count, style) НЕ ТРОГАТЬ
3. **ВСЕ НАДПИСИ НА КИРИЛЛИЦЕ** — если на сгенерированном есть хоть одно английское слово → перегенерация
4. **ПРАВАЯ ПАНЕЛЬ = ОБРАЗЕЦ ДОППЕЛЬГАНГЕРА** — любой расхождение в стиле панели → перегенерация

---

## Промпты для 22 монстров (на русском)

### 1. Гоблин (Goblin) — CR 1/4

```
Bestiary illustration for D&D 5e monster "Гоблин" (Goblin), small humanoid, CR 1/4.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet cobblestones reflecting dim lantern light.

Monster appearance: Маленький злобный гуманоид, кожа от жёлтовато-красной до тёмно-зелёной, заострённые уши, острые зубы. Носит рваную украденную кожаную броню. Сгорбленная осанка, крадущаяся поза. Жёлтые глаза блестят в темноте. Мокрая кожа от дождя.

Composition: Creature on the LEFT side, crouched on wet cobblestones, dagger drawn. Description text panel on the RIGHT side in Russian (Cyrillic). Background: dark alley with gothic architecture, rain streaks, crow silhouettes on rooftops. Dramatic chiaroscuro lighting from single lantern source.

Color palette: primarily black, white, greys, muted sepia/gold highlights on eyes, metal, dagger. No bright colors.

Style references: Gustave Doré engravings, Mike Mignola heavy shadows, noir comic aesthetics, Victorian gothic horror. High detail, 8k resolution.

TEXT: All text in Russian (Cyrillic). Monster name "ГОБЛИН" at top left. Stats block on right panel. No English.
```

---

### 2. Волк (Wolf) — CR 1/4

```
Bestiary illustration for D&D 5e monster "Волк" (Wolf), medium beast, CR 1/4.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet ground reflecting dim light.

Monster appearance: Полый серый волк с свалявшейся мокрой шерстью, горящие янтарные глаза, острые клыки видны. Мускулистый, но измождённый. Дождь капает с шерсти. Поза стайного охотника — низко, готов к прыжку. Уши навострены.

Composition: Creature on the LEFT side, side profile on wet forest floor or cobblestones, head turned toward viewer. Description text panel on the RIGHT side in Russian (Cyrillic). Background: dark trees or gothic alley, rain, mist, crow silhouettes. Single dramatic light source catching eyes and fur texture. Water droplets on fur.

Color palette: black, white, greys, muted sepia/gold on eyes and teeth. Wet fur texture detailed.

Style references: Gustave Doré, Mike Mignola, noir comics, gothic horror. High detail, 8k.

TEXT: All text in Russian (Cyrillic). Monster name "ВОЛК" at top left. Stats block on right panel. No English.
```

---

### 3. Зомби (Zombie) — CR 1/4

```
Bestiary illustration for D&D 5e monster "Зомби" (Zombie), medium undead, CR 1/4.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes, monochrome with sepia/gold accents (#c9b896), heavy shadows, wet cobblestones.

Monster appearance: Разлагающийся труп, оживлённый некромантией. Серо-зелёная гнилая плоть, оголённые кости, пустые белые глаза. Рваные лохмотья на теле. Пропавшие куски плоти, видны рёбра. Шатающаяся поза, руки вытянуты вперёд. Дождь моет грязь с костей.

Composition: Creature on the LEFT side, full body, shambling forward on wet street. Description text panel on the RIGHT side in Russian (Cyrillic). Background: foggy gothic street, gas lamps, crows on wires. Chiaroscuro — light from behind silhouetting the figure. Texture: wet rotting flesh, bone, damp rags.

Color palette: greys, blacks, sepia/gold only on magical necrotic glow in eyes. No bright colors.

Style references: Gustave Doré, Bernie Wrightson, Mike Mignola, gothic horror. High detail, 8k.

TEXT: All text in Russian (Cyrillic). Monster name "ЗОМБИ" at top left. Stats block on right panel. No English.
```

---

### 4. Скелет (Skeleton) — CR 1/4

```
Bestiary illustration for D&D 5e monster "Скелет" (Skeleton), medium undead, CR 1/4.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes, monochrome with sepia/gold accents (#c9b896), heavy shadows.

Monster appearance: Оживлённый человеческий скелет, пожелтевшие древние кости. Ржавый короткий меч в одной руке, ржавый короткий лук на спине. Пустые глазницы с тусклыми магическими точками. Челюсть немного приоткрыта. Дождь проходит через рёбра.

Composition: Creature on the LEFT side, standing at attention on wet cobblestones, sword raised. Description text panel on the RIGHT side in Russian (Cyrillic). Background: ruined gothic courtyard, rain, mist, crows. Dramatic side lighting emphasizing bone structure. Each vertebra, rib, phalanx detailed.

Color palette: bone white/cream, dark greys, sepia/gold on magical eye glow and rust. Wet bone texture.

Style references: Gustave Doré anatomical plates, Mike Mignola, gothic horror. High detail, 8k.

TEXT: All text in Russian (Cyrillic). Monster name "СКЕЛЕТ" at top left. Stats block on right panel. No English.
```

---

### 5. Культист (Cultist) — CR 1/8

```
Bestiary illustration for D&D 5e monster "Культист" (Cultist), medium humanoid, CR 1/8.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes, monochrome with sepia/gold accents (#c9b896), gritty atmospheric lighting.

Monster appearance: Фанатичный человек в тёмном капюшоне с мантией cult symbol (스타лизованный глаз/щупальце/кинжал). Лицо в тени от капюшона. Ритуальный кинжал на ремне. Бледная кожа, тёмные круги под глазами. Фанатический взгляд. Дождь на мантии.

Composition: Creature on the LEFT side, 3/4 view in ritual circle on wet stone floor. Description text panel on the RIGHT side in Russian (Cyrillic). Background: gothic temple interior, dripping water, candlelight, crow shadows. Chiaroscuro from ritual candles. Texture: wet wool robe, steel dagger, stone.

Color palette: blacks, dark greys, sepia/gold on candlelight and symbol. No bright colors.

Style references: Gustave Doré, Mike Mignola, noir comics, Victorian occult. High detail, 8k.

TEXT: All text in Russian (Cyrillic). Monster name "КУЛЬТИСТ" at top left. Stats block on right panel. No English.
```

---

### 6. Колючечник / Twig Blight — CR 1/8

```
Bestiary illustration for D&D 5e monster "Колючечник" (Twig Blight), small plant, CR 1/8.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes, monochrome with sepia/gold accents (#c9b896), heavy shadows.

Monster appearance: Искажённая человеческая форма из сухих хрупких веток и шипов. Корневидные когти вместо рук. Нет лица — только узлы и полости там, где должны быть глаза. Сок как чёрная кровь. Маскируется под сухой куст до движения. Дождь капает с веток.

Composition: Creature on the LEFT side, emerging from shadows in overgrown gothic garden. Half-hidden behind statue. Description text panel on the RIGHT side in Russian (Cyrillic). Background: ruined marble, wet dead leaves, crows on bare branches. Light catches thorns and bark texture.

Color palette: dark browns/blacks (rendered in greys), sepia/gold on sap droplets. Wet bark texture.

Style references: Arthur Rackham, Gustave Doré, Mike Mignola, dark fairy tale. High detail, 8k.

TEXT: All text in Russian (Cyrillic). Monster name "КОЛЮЧЕЧНИК" at top left. Stats block on right panel. No English.
```

---

### 7. Гигантский паук (Giant Spider) — CR 1

```
Bestiary illustration for D&D 5e monster "Гигантский паук" (Giant Spider), large beast, CR 1.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes, monochrome with sepia/gold accents (#c9b896), heavy shadows, wet stone.

Monster appearance: Огромный паук с телом 3м, размахом ног 4м. Восемь глянцевых чёрных глаз, отражающих свет. Мокрая хитиновая экзоскелета, прядильщики капают шелком. Яд капает с хелицер. Ноги rozesrты в охотничьей позе. Дождь на паутине.

Composition: Creature on the LEFT side, centered in giant web between gothic arches. Web strands glisten with rain. Spider descending on silk thread. Description text panel on the RIGHT side in Russian (Cyrillic). Background: dark cavern/cathedral, mist, crows. Single light source catching eyes and wet chitin.

Color palette: blacks, dark greys, sepia/gold on eyes and silk. Wet chitin texture highly detailed.

Style references: Gustave Doré, H.R. Giger biomechanical, Mike Mignola, arachnophobia fuel. High detail, 8k.

TEXT: All text in Russian (Cyrillic). Monster name "ГИГАНТСКИЙ ПАУК" at top left. Stats block on right panel. No English.
```

---

### 8. Багбир (Bugbear) — CR 1

```
Bestiary illustration for D&D 5e monster "Багбир" (Bugbear), medium humanoid (goblinoid), CR 1.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes, monochrome with sepia/gold accents (#c9b896), gritty atmospheric lighting.

Monster appearance: Большой мохнатый гуманоидоид, 7 футов ростом. Медвежья морда, заострённые уши, жёлтые глаза. Густая свалявшаяся шерсть (тёмно-коричневая/серая), мокрая от дождя. Носит сборную броню — кожа, обрезки цепи. Огромная колотушка на плече. Скрытная поза несмотря на размер.

Composition: Creature on the LEFT side, lurking in gothic alley doorway. Rain silhouettes fur. One clawed hand on doorframe. Description text panel on the RIGHT side in Russian (Cyrillic). Background: cobblestones, gas lamp, crows. Chiaroscuro — light from side catching fur texture and weapon.

Color palette: dark greys, blacks, sepia/gold on eyes and metal. Wet fur texture detailed.

Style references: Gustave Doré, Mike Mignola, Dark Souls concept art, gothic horror. High detail, 8k.

TEXT: All text in Russian (Cyrillic). Monster name "БАГБИР" at top left. Stats block on right panel. No English.
```

---

### 9. Мимик (Mimic) — CR 2

```
Bestiary illustration for D&D 5e monster "Мимик" (Mimic), medium monstrosity, CR 2.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes, monochrome with sepia/gold accents (#c9b896), heavy shadows.

Monster appearance: Форма сундука с сокровищами — но крышка немного приоткрыта, rivelaя ряды игольчатых зубов. Ложноножки формируются внутри. Древесная текстура немного неправильная — слишком органичная. Металлические обвязки выглядят как хитин. Липкая блестящая слизь по краям. Один глаз на стебле выглядывает из замочной скважины.

Composition: Creature on the LEFT side, sitting on wet dungeon floor (gothic corridor). Half-open, drooling. Adventurer's reflection in slime. Description text panel on the RIGHT side in Russian (Cyrillic). Background: stone arches, dripping water, crows in rafters. Dramatic lighting on teeth and slime.

Color palette: dark wood greys, metal greys, sepia/gold on slime and teeth. Wet organic texture.

Style references: Gustave Doré, H.R. Giger, Mike Mignola, dark fantasy. High detail, 8k.

TEXT: All text in Russian (Cyrillic). Monster name "МИМИК" at top left. Stats block on right panel. No English.
```

---

### 10. Желеобразный куб (Gelatinous Cube) — CR 2

```
Bestiary illustration for D&D 5e monster "Желеобразный куб" (Gelatinous Cube), large ooze, CR 2.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes, monochrome with sepia/gold accents (#c9b896), heavy shadows.

Monster appearance: Идеальный прозрачный куб 10x10 футов из желатинизированного вещества. Почти невидим — виден только искажением и запертыми предметами внутри: кости, монеты, оружие, частично растворённые доспехи в подвешенном состоянии. Поверхность немного волнится. Слабый рефрактивный контур.

Composition: Creature on the LEFT side, filling gothic corridor completely. Adventurer's lantern light refracting through cube. Silhouette of cube visible by distortion of background architecture. Trapped treasure glowing faintly inside. Description text panel on the RIGHT side in Russian (Cyrillic). Rain on floor outside cube.

Color palette: transparent greys/whites, trapped objects in sepia/gold. Refraction and caustics detailed.

Style references: Gustave Doré, Moebius transparency studies, Mike Mignola negative space, gothic horror. High detail, 8k.

TEXT: All text in Russian (Cyrillic). Monster name "ЖЕЛЕОБРАЗНЫЙ КУБ" at top left. Stats block on right panel. No English.
```

---

### 11. Охровый желеобразный (Ochre Jelly) — CR 2

```
Bestiary illustration for D&D 5e monster "Охровый желеобразный" (Ochre Jelly), large ooze, CR 2.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes, monochrome with sepia/gold accents (#c9b896), heavy shadows.

Monster appearance: Аморфный жёлто-охристый аморфный blob, скользящий по полу и стенам. Полупрозрачная membrana, внутренние ядра видны. Кислотные пузыри на поверхности. Ложноножки формируются и retractятся. Растворённые фрагменты костей видны внутри массы. Мокрая блестящая поверхность.

Composition: Creature on the LEFT side, on wet dungeon floor, climbing gothic wall. Half-dissolved skeleton in its mass. Description text panel on the RIGHT side in Russian (Cyrillic). Background: stone arches, dripping acid, crows. Side lighting showing translucency and internal structure.

Color palette: rendered in greys with sepia/gold for ochre tone and acid bubbles. Wet translucent texture.

Style references: Gustave Doré, Bernie Wrightson slime, Mike Mignola, gothic horror. High detail, 8k.

TEXT: All text in Russian (Cyrillic). Monster name "ОХРОВЫЙ ЖЕЛЕОБРАЗНЫЙ" at top left. Stats block on right panel. No English.
```

---

### 12. Доппельгангер (Doppelganger) — CR 3

```
Bestiary illustration for D&D 5e monster "Доппельгангер" (Doppelganger), medium monstrosity, CR 3.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes, monochrome with sepia/gold accents (#c9b896), gritty atmospheric lighting.

Monster appearance: Истинная форма — высокий бледный безволосый гуманоид, удлинённые конечности, безликое лицо с большими чёрными глазами. Худые пальцы. Кожа как мокрый мрамор. Переключается между формами — призрачные наложения человеческих лиц, ripple'жущие по поверхности. Дождь стекает по безликому лицу.

Composition: Creature on the LEFT side, standing in gothic hallway of mirrors. Each reflection shows a different face. Real form in center. Crows perched on mirror frames. Description text panel on the RIGHT side in Russian (Cyrillic). Chiaroscuro — multiple light sources from mirrors.

Color palette: pale greys/whites, dark greys, sepia/gold on eyes and mirror frames. Wet skin texture, mirror reflections.

Style references: Gustave Doré, M.C. Escher, Mike Mignola, psychological horror. High detail, 8k.

TEXT: All text in Russian (Cyrillic). Monster name "ДОППЕЛЬГАНГЕР" at top left. Stats block on right panel. No English.
```

---

### 13. Наблюдатель (Spectator) — CR 3

```
Bestiary illustration for D&D 5e monster "Наблюдатель" (Spectator), medium aberration, CR 3.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet cobblestones reflecting dim lantern light.

Monster appearance: Плавающая сфера ~1.5м диаметром, мокрая кожистая поверхность. Центральный огромный глаз с вертикальным зрачком — пускает антимагический конус (виден как тепловое искажение). Четыре длинных глазных стебля растут с верхушки, каждый заканчивается меньшим глазом — блестящими, как жемчужины в грязи. Парящий бесшумно над мокрыми плитами. Дождь капает со сферы, стекая ручейками. Аура холодного интеллекта.

Composition: Creature on the LEFT side (60% of image), hovering in center of circular gothic library with towering bookshelves. Eyestalks track different ancient tomes simultaneously. Central eye projects faint antimagic distortion cone. Description text panel on the RIGHT side (40% of image) in Russian (Cyrillic). Background: rain through stained glass, crow silhouettes on sills, wet stone floor reflecting dim lantern light. Dramatic chiaroscuro lighting from single source above.

Color palette: primarily black, white, greys, with muted sepia/gold (#c9b896) highlights on all five eyes and magical glow. Wet leathery texture highly detailed.

Style references: Gustave Doré engravings, H.R. Giger biomechanical, Mike Mignola heavy shadows, Lovecraftian horror. High detail, masterpiece quality, 8k resolution.

TEXT REQUIREMENTS (CRITICAL):
- ALL TEXT ON IMAGE MUST BE IN RUSSIAN (CYRILLIC ALPHABET ONLY)
- NO ENGLISH WORDS ANYWHERE
- Right panel format IDENTICAL to Doppelganger example:
  * Clean rectangular panel, thin sepia/gold (#c9b896) border 2px
  * Top: "НАБЛЮДАТЕЛЬ" in CYRILLIC UPPERCASE, serif font (Cinzel/Trajan style), gold #c9b896, centered
  * Divider line: gold #c9b896, 1px, 80% width
  * Stats block (4 lines): "CR 3" / "РАЗМЕР: СРЕДНИЙ" / "ТИП: АБЕРРАЦИЯ" / "МИРОВОЗЗРЕНИЕ: НЕЙТРАЛЬНО-ЗЛОЙ" — LABEL in gold, VALUE in white, left-aligned
  * Divider line after stats
  * Description: justified paragraphs, white/light grey serif font, 1.4 line height, 15% padding
  * Divider line before abilities
  * Ability scores: 6 columns with CYRILLIC headers (СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР), values below, gold headers, white values, monospace font
  * Bottom: "MM24" source tag, gold, right-aligned
  * NO decorative frames, NO ornate corners, NO varying border styles — strict clean D&D 5e character sheet aesthetic
```

---

### 14. Ускользающий зверь (Displacer Beast) — CR 3

```
Bestiary illustration for D&D 5e monster "Ускользающий зверь" (Displacer Beast), large monster, CR 3.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet cobblestones reflecting dim lantern light, illusion distortion.

Monster appearance: Шестиногая пантера размером с пуму, мокрая сине-чёрная шерсть, каждая прядь детализирована. Два длинных щупальца с костяными шипами вырываются из плеч, капают дождевой водой. Иллюзорный дубликат смещён на 3 фута — полупрозрачное призрачное копию, сквозь которую виден фон. Настоящий зверь: дождь брызжет по шерсти, оставляя тёмные пятна. Иллюзия: капли проходят сквозь. Жёлто-зелёные глаза горят в полумраке. Поза охотника — нижнийkörper прижат к земле, готовый к прыжку.

Composition: Creature on the LEFT side (60% of image), stalking on wet gothic cobblestones. Real form left, illusion right (or vice versa) — both visible simultaneously. Rain droplets on real fur, passing through illusion. Description text panel on the RIGHT side (40% of image) in Russian (Cyrillic). Background: narrow gothic alley, gas lamp flickering, crow silhouettes on rooftops, mist. Chiaroscuro — single dramatic light source catching only the real form.

Color palette: primarily black, white, greys, muted sepia/gold (#c9b896) highlights on real eyes only. Illusion rendered as translucent ghostly grey. Wet fur texture highly detailed.

Style references: Gustave Doré engravings, Mike Mignola heavy shadows, D&D classic Displacer Beast art, optical illusion noir. High detail, masterpiece quality, 8k resolution.

TEXT REQUIREMENTS (CRITICAL):
- ALL TEXT ON IMAGE MUST BE IN RUSSIAN (CYRILLIC ALPHABET ONLY)
- NO ENGLISH WORDS ANYWHERE
- Right panel format IDENTICAL to Doppelganger example:
  * Clean rectangular panel, thin sepia/gold (#c9b896) border 2px
  * Top: "УСКОЛЗАЮЩИЙ ЗВЕРЬ" in CYRILLIC UPPERCASE, serif font (Cinzel/Trajan style), gold #c9b896, centered
  * Divider line: gold #c9b896, 1px, 80% width
  * Stats block (4 lines): "CR 3" / "РАЗМЕР: БОЛЬШОЙ" / "ТИП: МОНСТР" / "МИРОВОЗЗРЕНИЕ: ЗАКОННО-ЗЛОЙ" — LABEL in gold, VALUE in white, left-aligned
  * Divider line after stats
  * Description: justified paragraphs, white/light grey serif font, 1.4 line height, 15% padding
  * Divider line before abilities
  * Ability scores: 6 columns with CYRILLIC headers (СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР), values below, gold headers, white values, monospace font
  * Bottom: "MM24" source tag, gold, right-aligned
  * NO decorative frames, NO ornate corners, NO varying border styles — strict clean D&D 5e character sheet aesthetic
```

---

### 15. Минотавр (Minotaur) — CR 3

```
Bestiary illustration for D&D 5e monster "Минотавр" (Minotaur), large monster, CR 3.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet stone reflecting dim light.

Monster appearance: Огромный быко-головый гуманоид, 7+ футов ростом. Полированные чёрные рога, изогнутые вперёд, кончики заострены. Тёмная свалявшаяся мокрая шерсть, дождь стекает ручейками по мускулистому человеческому туловищу. Расщеплённые копыта на ногах, трескаются от влаги. Огромный двуручный секира на широком плече — кlinge ржавеет, но остра. Ноздри парят горячим туманом в ледяном дожде. Глаза — горящие угли, интеллектуальные и жестокие. Татуировка лабиринта на груди, размытая от шрамов и дождя. Дыхание тяжелое, видимое в холоде.

Composition: Creature on the LEFT side (60% of image), standing at center of stone labyrinth corridor in the City. Rain on fur and axe blade. Shadows of high maze walls converge above. Crow silhouettes perched on wall tops, watching. Description text panel on the RIGHT side (40% of image) in Russian (Cyrillic). Dramatic low angle — looking up at monster, emphasizing scale. Chiaroscuro from single lantern above.

Color palette: primarily black, white, greys, muted sepia/gold (#c9b896) highlights on horns, axe edge, eyes, tattoo. Wet fur texture, wet stone texture highly detailed.

Style references: Gustave Doré engravings, Mike Mignola heavy shadows, Dark Souls Taurus Demon, gothic horror. High detail, masterpiece quality, 8k resolution.

TEXT REQUIREMENTS (CRITICAL):
- ALL TEXT ON IMAGE MUST BE IN RUSSIAN (CYRILLIC ALPHABET ONLY)
- NO ENGLISH WORDS ANYWHERE
- Right panel format IDENTICAL to Doppelganger example:
  * Clean rectangular panel, thin sepia/gold (#c9b896) border 2px
  * Top: "МИНОТАВР" in CYRILLIC UPPERCASE, serif font (Cinzel/Trajan style), gold #c9b896, centered
  * Divider line: gold #c9b896, 1px, 80% width
  * Stats block (4 lines): "CR 3" / "РАЗМЕР: БОЛЬШОЙ" / "ТИП: МОНСТР" / "МИРОВОЗЗРЕНИЕ: ХАОТИЧНО-ЗЛОЙ" — LABEL in gold, VALUE in white, left-aligned
  * Divider line after stats
  * Description: justified paragraphs, white/light grey serif font, 1.4 line height, 15% padding
  * Divider line before abilities
  * Ability scores: 6 columns with CYRILLIC headers (СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР), values below, gold headers, white values, monospace font
  * Bottom: "MM24" source tag, gold, right-aligned
  * NO decorative frames, NO ornate corners, NO varying border styles — strict clean D&D 5e character sheet aesthetic
```

---

### 16. Бурый увалень (Umber Hulk) — CR 5

```
Bestiary illustration for D&D 5e monster "Бурый увалень" (Umber Hulk), large monster, CR 5.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet stone.

Monster appearance: Огромный жук-гуманоидный гибрид, 8+ футов ростом. Толстый мокрый хитиновый панцирь — тёмный умбриевый/чёрный, каждая пластина детализирована, дождь стекает ручейками по швам. Четыре глаза: два огромных сложных фасеточных (мрачные, безжизненные) и два меньших человекообразных под ними — в них пугающий разум. Огромные клешневидные челюсти/мандибулы, капающие слюной и дождевой водой. Мощные роющие лапы с костлявыми отростами. Спина покрыта выступаниями. Поза — выпрямленный, готовый к разрыву камня и плоти. Запутывающий взгляд из меньших глаз — волна психческого давления.

Composition: Creature on the LEFT side (60% of image), emerging from collapsed tunnel in gothic catacombs of the City. Stone dust mixes with rain. Claws gouge wet stone. Description text panel on the RIGHT side (40% of image) in Russian (Cyrillic). Background: arched tunnel vault, bioluminescent fungi glowing dim sepia/gold on walls, crow silhouettes in shaft of light far above. Chiaroscuro — light from fungi and distant shaft.

Color palette: primarily black, white, dark greys for chitin, muted sepia/gold (#c9b896) highlights on all four eyes, mandible edges, fungi glow. Wet chitin texture highly detailed.

Style references: Gustave Doré engravings, H.R. Giger biomechanical, Mike Mignola heavy shadows, D&D classic art. High detail, masterpiece quality, 8k resolution.

TEXT REQUIREMENTS (CRITICAL):
- ALL TEXT ON IMAGE MUST BE IN RUSSIAN (CYRILLIC ALPHABET ONLY)
- NO ENGLISH WORDS ANYWHERE
- Right panel format IDENTICAL to Doppelganger example:
  * Clean rectangular panel, thin sepia/gold (#c9b896) border 2px
  * Top: "БУРЫЙ УВАЛЕНЬ" in CYRILLIC UPPERCASE, serif font (Cinzel/Trajan style), gold #c9b896, centered
  * Divider line: gold #c9b896, 1px, 80% width
  * Stats block (4 lines): "CR 5" / "РАЗМЕР: БОЛЬШОЙ" / "ТИП: МОНСТР" / "МИРОВОЗЗРЕНИЕ: ХАОТИЧНО-ЗЛОЙ" — LABEL in gold, VALUE in white, left-aligned
  * Divider line after stats
  * Description: justified paragraphs, white/light grey serif font, 1.4 line height, 15% padding
  * Divider line before abilities
  * Ability scores: 6 columns with CYRILLIC headers (СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР), values below, gold headers, white values, monospace font
  * Bottom: "MM24" source tag, gold, right-aligned
  * NO decorative frames, NO ornate corners, NO varying border styles — strict clean D&D 5e character sheet aesthetic
```

---

### 17. Маг (Mage) — CR 6

```
Bestiary illustration for D&D 5e monster "Маг" (Mage), medium humanoid, CR 6.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet cobblestones.

Monster appearance: Высокий человек в роскошных тёмных бархатных мантиях с золотой вышивкой — скрытые арканные знаки, живые в дожде. Амулет с демоническим символом на груди, пульсирует тусклым золотом. Бледное измождённое лицо, острые черты, интенсивные глаза — один обычный, второй с магической иридой. Одна рука поднята — колдует, арканная энергия трещит сепией и золотом вокруг пальцев, дождь испаряется в пар до касания кожи. Другая рука на кинжале с рукоятью из черного костяного рога. Мокрая бархатная мантия притянута к телу. Аура холодной высшей силы и опасности.

Composition: Creature on the LEFT side (60% of image), on balcony of gothic tower in the City. Lightning flash illuminates silhouette. City of a Thousand Crows spreads below — spires, rain, thousands of crow silhouettes. Faint magic circle at feet, glowing sepia/gold. Crows scatter from arcane power. Description text panel on the RIGHT side (40% of image) in Russian (Cyrillic). Chiaroscuro — lightning and magical light as dual sources.

Color palette: primarily black, white, dark greys, muted sepia/gold (#c9b896) on magic, embroidery, amulet, lightning, dagger hilt. Wet velvet texture highly detailed.

Style references: Gustave Doré engravings, Mike Mignola heavy shadows, Harry Clarke illustrations, Victorian occult noir. High detail, masterpiece quality, 8k resolution.

TEXT REQUIREMENTS (CRITICAL):
- ALL TEXT ON IMAGE MUST BE IN RUSSIAN (CYRILLIC ALPHABET ONLY)
- NO ENGLISH WORDS ANYWHERE
- Right panel format IDENTICAL to Doppelganger example:
  * Clean rectangular panel, thin sepia/gold (#c9b896) border 2px
  * Top: "МАГ" in CYRILLIC UPPERCASE, serif font (Cinzel/Trajan style), gold #c9b896, centered
  * Divider line: gold #c9b896, 1px, 80% width
  * Stats block (4 lines): "CR 6" / "РАЗМЕР: СРЕДНИЙ" / "ТИП: ГУМАНОИД" / "МИРОВОЗЗРЕНИЕ: ЗАКОННО-ЗЛОЙ" — LABEL in gold, VALUE in white, left-aligned
  * Divider line after stats
  * Description: justified paragraphs, white/light grey serif font, 1.4 line height, 15% padding
  * Divider line before abilities
  * Ability scores: 6 columns with CYRILLIC headers (СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР), values below, gold headers, white values, monospace font
  * Bottom: "MM24" source tag, gold, right-aligned
  * NO decorative frames, NO ornate corners, NO varying border styles — strict clean D&D 5e character sheet aesthetic
```

---

### 18. Молодой зелёный дракон (Young Green Dragon) — CR 8

```
Bestiary illustration for D&D 5e monster "Молодой зелёный дракон" (Young Green Dragon), large dragon, CR 8.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet stone.

Monster appearance: Молодой дракон, изумрудные чешуйки (рендерятся в тёмных серых с едва уловимым зелёным отливом — монохром нуара). Крылья сложены, перепонки полупрозрачны, проленены вены. Рога загибаются назад, полированы до зеркального блеска. Из ноздрей вырываются волны хлорного газа — видны как тёмные клубы в дожде. Глаза — горящие янтарь/золото, интеллектуальные, коварные, вычисляющие. Свитки сокровищ видны под брюхом — золото, артефакты, секреты. Дождь на чешуйках — каждая чешуйка детализирована, капли скакают и стекают. Когти в мокром камне cathédrale.

Composition: Creature on the LEFT side (60% of image), perched on gothic cathedral spire of the City. Wings mantling, blocking rain. City of a Thousand Crows spreads below — forest of spires, eternal rain, thousands of crow silhouettes wheeling in mist. Lightning silhouettes wings. Description text panel on the RIGHT side (40% of image) in Russian (Cyrillic). Low angle — dragon dominates frame, looking down with contempt. Chiaroscuro — lightning and distant city lanterns.

Color palette: primarily black, white, dark greys with subtle green tint on scales, muted sepia/gold (#c9b896) highlights on eyes, treasure glints, chlorine gas, horn tips. Wet scale texture, wing membrane translucency highly detailed.

Style references: Gustave Doré engravings, Todd Lockwood dragon art, Mike Mignola heavy shadows, gothic fantasy noir. High detail, masterpiece quality, 8k resolution.

TEXT REQUIREMENTS (CRITICAL):
- ALL TEXT ON IMAGE MUST BE IN RUSSIAN (CYRILLIC ALPHABET ONLY)
- NO ENGLISH WORDS ANYWHERE
- Right panel format IDENTICAL to Doppelganger example:
  * Clean rectangular panel, thin sepia/gold (#c9b896) border 2px
  * Top: "МОЛОДОЙ ЗЕЛЁНЫЙ ДРАКОН" in CYRILLIC UPPERCASE, serif font (Cinzel/Trajan style), gold #c9b896, centered
  * Divider line: gold #c9b896, 1px, 80% width
  * Stats block (4 lines): "CR 8" / "РАЗМЕР: БОЛЬШОЙ" / "ТИП: ДРАКОН" / "МИРОВОЗЗРЕНИЕ: ЗАКОННО-ЗЛОЙ" — LABEL in gold, VALUE in white, left-aligned
  * Divider line after stats
  * Description: justified paragraphs, white/light grey serif font, 1.4 line height, 15% padding
  * Divider line before abilities
  * Ability scores: 6 columns with CYRILLIC headers (СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР), values below, gold headers, white values, monospace font
  * Bottom: "MM24" source tag, gold, right-aligned
  * NO decorative frames, NO ornate corners, NO varying border styles — strict clean D&D 5e character sheet aesthetic
```

---

### 19. Вампир (Vampire) — CR 13

```
Bestiary illustration for D&D 5e monster "Вампир" (Vampire), medium undead, CR 13.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet stone.

Monster appearance: Аристократичный бледный до прозрачности человек — кожа как мокрой мрамор. Острые удлиненные клыки, алые глаза горят сепией/золотом во мраке. Элегантная викторианская одежда — черный фрак, жакет, галстук, всё мокрое от дождя, ткань детально прорисована. Стоит перед высоким треснувшим зеркалом в готической кабинете — в зеркале Пустота, только дождь за окном. Одна рука на рукояти трости-шпаги с рубиновым натыком (сепия/золото). Туман у ног, скользит по полу. Летучие мыши и вороны переплетаются в волосах и на плечах — живые украшения. Дождь частично проходит сквозь — эфирная природа нежити. Запах крови и мокрого камня.

Composition: Creature on the LEFT side (60% of image), in gothic study of a City noble. Standing before tall cracked mirror (no reflection). Fireplace dying — last embers glow sepia/gold. Rain hammers tall window. Crow silhouettes on sill and in room. Description text panel on the RIGHT side (40% of image) in Russian (Cyrillic). Chiaroscuro — dying firelight and cold moonlight from window.

Color palette: pale greys/whites (skin), deep blacks (attire), muted sepia/gold (#c9b896) on eyes, fangs, jewelry, fire embers, cane ruby. Mist texture, wet fabric texture highly detailed.

Style references: Gustave Doré engravings, Harry Clarke illustrations, Mike Mignola heavy shadows, Castlevania gothic, Victorian horror noir. High detail, masterpiece quality, 8k resolution.

TEXT REQUIREMENTS (CRITICAL):
- ALL TEXT ON IMAGE MUST BE IN RUSSIAN (CYRILLIC ALPHABET ONLY)
- NO ENGLISH WORDS ANYWHERE
- Right panel format IDENTICAL to Doppelganger example:
  * Clean rectangular panel, thin sepia/gold (#c9b896) border 2px
  * Top: "ВАМПИР" in CYRILLIC UPPERCASE, serif font (Cinzel/Trajan style), gold #c9b896, centered
  * Divider line: gold #c9b896, 1px, 80% width
  * Stats block (4 lines): "CR 13" / "РАЗМЕР: СРЕДНИЙ" / "ТИП: НЕЖИТЬ" / "МИРОВОЗЗРЕНИЕ: ЗАКОННО-ЗЛОЙ" — LABEL in gold, VALUE in white, left-aligned
  * Divider line after stats
  * Description: justified paragraphs, white/light grey serif font, 1.4 line height, 15% padding
  * Divider line before abilities
  * Ability scores: 6 columns with CYRILLIC headers (СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР), values below, gold headers, white values, monospace font
  * Bottom: "MM24" source tag, gold, right-aligned
  * NO decorative frames, NO ornate corners, NO varying border styles — strict clean D&D 5e character sheet aesthetic
```

---

### 20. Бехолдер (Beholder) — CR 13

```
Bestiary illustration for D&D 5e monster "Бехолдер" (Beholder), large aberration, CR 13.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet stone.

Monster appearance: Плавающая сфера 3 метров в диаметре, мокрая кожаная кожа — каждая чешуйка/пор детально прорисована, дождь стекает жирными каплями. Центральный огромный глаз с вертикальным зрачком — из него пульсирует антимэгический конус, виден как тепловое искажение реальности (сепия/золото). 10 глазных стеблей излучаются хаотично в стороны, каждый заканчивается глазом с уникальной иридой — все в оттенках сепии и золота. Рот полный игольчатых зубов под центральным глазом, капает слюной и дождевой водой. Парящий в дожде — капли орбитируют вокруг сферы, подчиняясь его воле. Аура параноидального гениальства и абсолютного контроля.

Composition: Creature on the LEFT side (60% of image), center of vast gothic throne room in the City — former cathedral, now lair. Eyestalks track invisible intruders in all directions. Central eye projects antimagic cone across entrance. Piles of treasure, forbidden art, petrified captives around. Rain pours through broken dome. Crow silhouettes perched on debris and arches — hundreds, watching. Description text panel on the RIGHT side (40% of image) in Russian (Cyrillic). Dramatic lighting from central eye and antimagic cone.

Color palette: primarily black, white, dark greys, muted sepia/gold (#c9b896) highlights on all 11 eyes, antimagic distortion, teeth, magical rays. Wet skin texture highly detailed.

Style references: Gustave Doré engravings, H.R. Giger biomechanical, Tony DiTerlizzi D&D art, Mike Mignola heavy shadows, D&D iconic. High detail, masterpiece quality, 8k resolution.

TEXT REQUIREMENTS (CRITICAL):
- ALL TEXT ON IMAGE MUST BE IN RUSSIAN (CYRILLIC ALPHABET ONLY)
- NO ENGLISH WORDS ANYWHERE
- Right panel format IDENTICAL to Doppelganger example:
  * Clean rectangular panel, thin sepia/gold (#c9b896) border 2px
  * Top: "БЕХОЛДЕР" in CYRILLIC UPPERCASE, serif font (Cinzel/Trajan style), gold #c9b896, centered
  * Divider line: gold #c9b896, 1px, 80% width
  * Stats block (4 lines): "CR 13" / "РАЗМЕР: БОЛЬШОЙ" / "ТИП: АБЕРРАЦИЯ" / "МИРОВОЗЗРЕНИЕ: ЗАКОННО-ЗЛОЙ" — LABEL in gold, VALUE in white, left-aligned
  * Divider line after stats
  * Description: justified paragraphs, white/light grey serif font, 1.4 line height, 15% padding
  * Divider line before abilities
  * Ability scores: 6 columns with CYRILLIC headers (СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР), values below, gold headers, white values, monospace font
  * Bottom: "MM24" source tag, gold, right-aligned
  * NO decorative frames, NO ornate corners, NO varying border styles — strict clean D&D 5e character sheet aesthetic
```

---

### 21. Лич (Lich) — CR 21

```
Bestiary illustration for D&D 5e monster "Лич" (Lich), medium undead, CR 21.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, wet stone.

Monster appearance: Скелетный архмаг в великолепных гниющих мантиях древней короны — ткань когда-то золотая, теперь серая от веков и дождя, заломы и рвы. Корона/филактерия на груди пульсирует тусклым золотым светом сквозь рёбра. Глазницы горят холодным пламенем — сепия/золото, пугающее в своей безжизненности. Скелетные пальцы трещат некротической энергией, дождь испаряется в синий туман при касании. Мантии парят в несуществующем ветре, продиктованном волей. Кости пожелтели веками, на черепе трещины от битв. Каждая ребро, каждый фаланг детализированы. Аура вековой злобы и расчёта.

Composition: Creature on the LEFT side (60% of image), on obsidian throne in necropolis cathedral of the City. Army of undead — скелеты, зомби, враньи — кланяются в дожде позади. Филактерия светится сквозь грудную клетку. Вороны — сотни — кружат по башне, черные пятна на сером небе. Молнии разрывают облака, освещая сцену. Description text panel on the RIGHT side (40% of image) in Russian (Cyrillic). Chiaroscuro — некротический свет от глаз и филактерии, молнии.

Color palette: bone whites/creams, dark greys, muted sepia/gold (#c9b896) highlights on eye flames, phylactery, crown, necrotic energy arcs. Wet bone texture, rotting silk texture highly detailed.

Style references: Gustave Doré engravings, Bernie Wrightson horror, Mike Mignola heavy shadows, Dark Souls gothic, masterpiece horror. High detail, masterpiece quality, 8k resolution.

TEXT REQUIREMENTS (CRITICAL):
- ALL TEXT ON IMAGE MUST BE IN RUSSIAN (CYRILLIC ALPHABET ONLY)
- NO ENGLISH WORDS ANYWHERE
- Right panel format IDENTICAL to Doppelganger example:
  * Clean rectangular panel, thin sepia/gold (#c9b896) border 2px
  * Top: "ЛИЧ" in CYRILLIC UPPERCASE, serif font (Cinzel/Trajan style), gold #c9b896, centered
  * Divider line: gold #c9b896, 1px, 80% width
  * Stats block (4 lines): "CR 21" / "РАЗМЕР: СРЕДНИЙ" / "ТИП: НЕЖИТЬ" / "МИРОВОЗЗРЕНИЕ: ЗАКОННО-ЗЛОЙ" — LABEL in gold, VALUE in white, left-aligned
  * Divider line after stats
  * Description: justified paragraphs, white/light grey serif font, 1.4 line height, 15% padding
  * Divider line before abilities
  * Ability scores: 6 columns with CYRILLIC headers (СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР), values below, gold headers, white values, monospace font
  * Bottom: "MM24" source tag, gold, right-aligned
  * NO decorative frames, NO ornate corners, NO varying border styles — strict clean D&D 5e character sheet aesthetic
```

---

### 22. Тараск (Tarrasque) — CR 30

```
Bestiary illustration for D&D 5e monster "Тараск" (Tarrasque), gargantuan monster, CR 30.

Noir fantasy style "City of a Thousand Crows": eternal rain, crow silhouettes in misty sky, monochrome palette with sepia/gold accents (#c9b896), gritty atmospheric lighting, heavy shadows, epic scale.

Monster appearance: Колоссальный рептилийный ужас, 50+ футов ростом. Непроницаемый панцирь из пластин — каждая как щит, покрыта шипами и шрамами веков. Два огромных изогнутых рога, сломанные и заостренные битвами. Хвост, заканчивающийся костяной булавой, способной сокрушить башни. Когти размером с осадные стрелы, вонзаются в камень. Челюсти раскалываются до ушей, ряды игольчатых зубов. Глаза горят первобытной яростью — сепия/золото, видны сквозь дождь на километры. Дождь льётся с панциря — каждая пластина детально прорисована, вода стекает ручейниками. Пар поднимается от раскалённого тела. Размах — непередаваемый, апокалиптический.

Composition: Creature on the LEFT side (60% of image), rampaging through gothic metropolis of the City of a Thousand Crows. Toppling spires, crushing cathedrals. Tiny soldiers/cannons on walls firing — useless, тракторы бесцельны. Вороны роем, как комары, кружат вокруг — сотни, тысячи, черная туча. Молнии силуэтируют монстра. Description text panel on the RIGHT side (40% of image) in Russian (Cyrillic). Low angle — monumental scale, camera at street level looking up. City burning (sepia/gold fires) in background.

Color palette: primarily black, white, dark greys for carapace, muted sepia/gold (#c9b896) highlights on eyes, horns, fires, lightning, reflections on wet plates. Rain, steam, destruction textures highly detailed.

Style references: Gustave Doré (Destroying Angel), Kaiju films, Mike Mignola heavy shadows, Zdzisław Beksiński apocalypse, epic gothic horror masterpiece. High detail, masterpiece quality, 8k resolution.

TEXT REQUIREMENTS (CRITICAL):
- ALL TEXT ON IMAGE MUST BE IN RUSSIAN (CYRILLIC ALPHABET ONLY)
- NO ENGLISH WORDS ANYWHERE
- Right panel format IDENTICAL to Doppelganger example:
  * Clean rectangular panel, thin sepia/gold (#c9b896) border 2px
  * Top: "ТАРАСК" in CYRILLIC UPPERCASE, serif font (Cinzel/Trajan style), gold #c9b896, centered
  * Divider line: gold #c9b896, 1px, 80% width
  * Stats block (4 lines): "CR 30" / "РАЗМЕР: ОГРОМНЫЙ" / "ТИП: МОНСТР" / "МИРОВОЗЗРЕНИЕ: БЕЗ МИРОВОЗЗРЕНИЯ" — LABEL in gold, VALUE in white, left-aligned
  * Divider line after stats
  * Description: justified paragraphs, white/light grey serif font, 1.4 line height, 15% padding
  * Divider line before abilities
  * Ability scores: 6 columns with CYRILLIC headers (СИЛ ЛОВ ТЕЛ ИНТ МДР ХАР), values below, gold headers, white values, monospace font
  * Bottom: "MM24" source tag, gold, right-aligned
  * NO decorative frames, NO ornate corners, NO varying border styles — strict clean D&D 5e character sheet aesthetic
```

---

## Настройки генерации на anymodel.org

| Параметр | Значение |
|----------|----------|
| Модель | GPT Image 2.5 |
| Соотношение сторон | 2:3 или 3:4 (портретная) |
| Разрешение | 1024x1536 или выше |
| Количество картинок | 1-2 на монстра |
| Negative Prompt | Общий (см. выше) |

---

## Как использовать

1. Откройте **один раз** anymodel.org/app/studio в браузере
2. **Выберите модель GPT Image 2.5** (в выпадающем списке моделей) — **ВСЕГДА проверяйте, что выбрана именно она**
3. Настройте один раз: aspect **2:3**, resolution **1024x1536** (или выше), **1 картинка**, стиль/качество по вкусу
4. **Negative Prompt — НЕТРОГАТЬ** (в веб-интерфейсе GPT Image 2.5 его может не быть, предыдущие генерации работали без него)
5. Для каждого монстра:
   - **Только** проверьте модель (GPT Image 2.5)
   - **Только** вставьте промпт монстра в поле **Prompt**
   - Нажмите **Generate**
   - Дождитесь результата, примите/перегенерируйте
   - Сохраните картинку
   - Очистите поле Prompt для следующего монстра
6. **НЕ открывайте новый таб/новую сессию** — используйте открытый таб до конца генерации всех монстров
7. **НЕ ТРОГАТЬ:** референс, соотношение сторон, качество, количество картинок, стиль — они сохраняются от первой настройки

> ⚠️ Каждое новое открытие anymodel.org сбрасывает выбор модели. GPT Image 2.5 должна быть выбрана ВСЕГДА — проверяйте перед каждой генерацией.
> ⚠️ **Рабочий процесс: проверил модель → вставил промпт → Generate. Всё остальное — не трогать.**

---

## Картинки сохраняются в

`bestiary/images/<id>.png` — например `bestiary/images/goblin.png`

Путь прописывается в `data/monsters.json` в поле `illustration`.