echo "Running Backup"
#AWS CREDS
export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=
export AWS_DEFAULT_REGION=eu-west-1
now=$(date +"%m_%d_%Y_%H_%M_%S")
host=$(hostname -f)

#DATABASE BACKUP
mkdir /tmp/backup
rm -r /tmp/backup/*
mkdir /tmp/backup/$now
mongodump --directoryperdb -o /tmp/backup/$now
tar -zcvf /tmp/backup/$now.gz.tar /tmp/backup/$now
/usr/local/bin/aws s3 cp /tmp/backup/$now.gz.tar s3://bootleggerlive/backups/$host/database/$now.gz.tar

echo "Backup Complete"
