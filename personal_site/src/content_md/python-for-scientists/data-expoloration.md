---
title: Daten analyse
slug:  "/python-for-scientists/data-exploration"
tag: programming, how-to, python
image: python-for-scientists/python_logo.png
alt: "The logo of the python programming language"
date: 24.09.2023
---

Bevor wir mit der eigentlichen Arbeit anfangen, ist es wichtig genau zu wissen, wie unsere Daten aussehen. Die Datenanalyse und -aufbereitung machen oft den Großteil des eigentlichen Projekts aus. Da es sich bei unseren Daten um Bilddaten handelt, wollen wir uns zunächst einige Bilder ansehen. Danach werden wir uns auch die Bildmetadaten ansehen.

## Bilder darstellen mit Matplotlib-Pyplot
Matplotlib/Pyplot ist eine der bekanntesten Python Bibliotheken. Diese wird hauptsächlich zum Plotten von Graphen verwendet, kann aber auch zur Darstellung von Bildern verwendet werden. Sie ist ähnlich wie zum Beispiel ggplot in R.

Um ein neues Paket in unserer Umgebung zu installieren, öffne eine Konsole, achte darauf, dass unsere Conda Umgebung aktiviert ist, und gib den Befehl ```pip install matplotlib``` ein. Pip ist Pythons standard Paketmanager, über den die meisten Programmbibliotheken installiert oder deinstalliert werden können.

Jetzt können wir in unserer ```data_exploration.py``` Datei Matplotlib importieren, um auf die Funktionen zugreifen zu können. Das machen wir mit dem Befehl 
```python
import matplotlib.pyplot as plt
```
Da wir erst nach dieser Zeile auf die Funktionen der importierten Bibliothek zugreifen können, sind die Importbefehle normalerweise ganz oben in einer Python-Datei zu finden. Sehen wir uns den Befehl noch kurz genauer an: Viele Python Bibliotheken bestehen aus mehreren Modulen. Diese Module können wir über die Punktnotation einzeln ansteuern. Hier importieren wir also das Modul pyplot aus der Bibliothek matplotlib. Alle Funktionen des Moduls bestehen aus dem Modulnamen als Präfix und dann dem eigentlichen Funktionsnamen. Zum Beispiel `matplotlib.pyplot.show()`. Damit wir nicht jedes mal den gesamten Namen schreiben müssen vergeben wir mit `as` eine Abkürzung für das Modul. Die meisten bekannten Pythonmodule haben bekannte Abkürzungen, und diese sollten auch von dir verwendet werden, damit andere deinen Code einfacher verstehen. Die Abkürzung für Pyplot ist standardmäßig plt. Andere gängige Kürzel sind pd für 'pandas' oder tf für 'Tensorflow'.

Schauen wir uns jetzt also das erste Bild unseres `livecell_test_images` Ordners an. Es hat den Namen `A172_Phase_C7_1_00d00h00m_1.tif`. Erinnere dich daran, wie wir im vorherigen Kapitel Pfade als Variablen gespeichert haben und speichere den Pfad zu diesem Bild in der Variable `exampleImgPath`. Danach können wir mit plt.imread das Bild aus dem Speicher laden:
```python
exampleImg = plt.imread(exampleImgPath)
```
Mit plt.imshow und plt.show können wir das Bild anzeigen lassen.
```python
plt.imshow(exampleImg)
plt.show()
```
`imshow` gibt an, dass wir exampleImg anzeigen wollen. `show` kumuliert alle Anzeigebefehle für Bilder und Graphen zu einer einzigen Grafik und zeigt diese dann an.
Um dieses Konzept zu verstehen, lade ein zweites Bild `BT474_Phase_D3_2_03d00h00m_4.tif`. Dann versuch einmal, den `show` Befehl nur einmal am Ende auszuführen, und danach `show` nach jedem Bild zu verwenden.

**Figures**

Um Bilder und Graphen besser vergleichen zu können, bietet Pyplot die Möglichkeit, mehrere Bilder und / oder Graphen in einer Figure anzuordnen. 
Lass uns jetzt also die ersten 8 Bilder des Ordners in einer Figure vergleichen. 

```python
for i in range(1, 5):
    img = plt.imread(f"{testImages}/A172_Phase_C7_1_00d00h00m_{str(i)}.tif")
    plt.subplot(2, 4, i)
    plt.imshow(img)
    plt.plot()
    img = plt.imread(f"{testImages}/A172_Phase_C7_1_00d04h00m_{str(i)}.tif")
    plt.subplot(2, 4, i + 4)
    plt.imshow(img)
    plt.plot()
    plt.show()
```