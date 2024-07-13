import sys
import psycopg2

assert len(sys.argv) > 0, print("Please specify jade type")

conn = psycopg2.connect(
    database = "Jutsudb",
    host = "coolify.pekopoikan.com",
    user = "postgres",
    password = "wLufz12FUIUogFO21aUvSXvl6U6tTYWlejwJVJL8XDkQnNmLPBgallSvTpqIyFz2",
    port = "5432"
)

cursor = conn.cursor()

def generateJadeList(type):
    generatedList = [{ "name": f"{type} Jade {x}", "image": f"{type}_Jade_Lv.{x}.jpg"} for x in range(1, 13)]

    generatedList.append({ "name": f"{type} King Jade", "image": f"Jade_{type}.jpg" })

    return generatedList

for jade in generateJadeList(sys.argv[0]):
    cursor.execute("""INSERT INTO "Jade" (jade_name, jade_image) VALUES (%(name)s, %(image)s);""", {"name": jade["name"], "image": f"https://media.pekopoikan.com/{jade["image"]}"})

print("Added jades successfully")

cursor.close()

conn.commit()

conn.close()