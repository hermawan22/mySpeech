# mySPeech

mySpeech is small library for make speech synthesis also speech recognition(coming soon).

## Demo
For demo, click [here](http://hermawan.id/example/).

## Example Usage

Download the library  [here](https://github.com/hermawan22/mySpeech/archive/master.zip).

This is example to using mySpeech :
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Example of mySpeech</title>
  </head>
  <body>
    <div id="example">
      Hello there, how are you?
    </div>
    <p>
      I'm fine, thank you.
    </p>

    <script src="../src/mySpeech.js"></script>
    <script>
      // without event
      mySpeech("#example").onSpeak();

      // with click event
      mySpeech("p").onClickSpeak("p");
    </script>
  </body>
</html>
```

### Customization
#### Language
mySpeech support this list language :
```
'Afrikaans'         =>  'af-ZA'
'Bahasa Indonesia'  =>  'id-ID'
'Bahasa Melayu'     =>  'ms-MY'
'Català'            =>  'ca-ES'
'Čeština'           =>  'cs-CZ'
'Deutsch'           =>  'de-DE'
'Australia'         =>  'en-AU'
'Canada'            =>  'en-CA'
'India'             =>  'en-IN'
'New Zealand'       =>  'en-NZ'
'South Africa'      =>  'en-ZA'
'United Kingdom'    =>  'en-GB'
'United States'     =>  'en-US'
'Argentina'         =>  'es-AR'
'Bolivia'           =>  'es-BO'
'Chile'             =>  'es-CL'
'Colombia'          =>  'es-CO'
'Costa Rica'        =>  'es-CR'
'Ecuador'           =>  'es-EC'
'El Salvador'       =>  'es-SV'
'España'            =>  'es-ES'
'Estados Unidos'    =>  'es-US'
'Guatemala'         =>  'es-GT'
'Honduras'          =>  'es-HN'
'México'            =>  'es-MX'
'Nicaragua'         =>  'es-NI'
'Panamá'            =>  'es-PA'
'Paraguay'          =>  'es-PY'
'Perú'              =>  'es-PE'
'Puerto Rico'       =>  'es-PR'
'República Dominicana' =>   'es-DO'
'Uruguay'           =>  'es-UY'
'Venezuela'         =>  'es-VE'
'Euskara'           =>  'eu-ES'
'Français'          =>  'fr-FR'
'Galego'            =>  'gl-ES'
'Hrvatski'          =>  'hr_HR'
'IsiZulu'           =>  'zu-ZA'
'Íslenska'          =>  'is-IS'
'Italia'            =>  'it-IT'
'Svizzera'          =>  'it-CH'
'Magyar'            =>  'hu-HU'
'Nederlands'        =>  'nl-NL'
'Norsk bokmål'      =>  'nb-NO'
'Polski'            =>  'pl-PL'
'Brasil'            =>  'pt-BR'
'Portugal'          =>  'pt-PT'
'Română'            =>  'ro-RO'
'Slovenčina'        =>  'sk-SK'
'Suomi'             =>  'fi-FI'
'Svenska'           =>  'sv-SE'
'Türkçe'            =>  'tr-TR'
'български'         =>  'bg-BG'
'Pусский'           =>  'ru-RU'
'Српски'            =>  'sr-RS'
'한국어'              =>  'ko-KR'
'普通话 (中国大陆)'   =>  'cmn-Hans-CN'
'普通话 (香港)'       =>  'cmn-Hans-HK'
'中文 (台灣)'        =>   'cmn-Hant-TW'
'粵語 (香港)'        =>   'yue-Hant-HK'
'日本語'             =>  'ja-JP'
'Lingua latīna'     =>  'la';
```
This is example for customization language :
```javascript
mySpeech("#example").language("en-GB").onSpeak();
```

#### Pitch & Rate
Pitch and rate is contain value **0 - 2**.  
So, you can customize like this :
```javascript
mySpeech("#example")
  .pitch(1.2)
  .rate(0.8)
  .onSpeak();
```

#### Event Click
If you need to use mySpeech whit clicked event, just use **onClickSpeak()** mehod.  
This is the example of code :
```javascript
mySpeech("p")
  .language("id-ID")
  .pitch(1)
  .rate(1.3)
  .onClickSpeak("p");
```

## License
This plugin is available under the [MIT License](https://opensource.org/licenses/MIT).
