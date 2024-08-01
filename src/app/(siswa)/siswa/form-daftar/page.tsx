"use client"
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Card,
  CardBody,
  Input,
  Typography,
  Button,
} from '@material-tailwind/react';
import { FormData } from '@/types';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-3xl">
        <CardBody>
          <Typography variant="h4" className="mb-6 text-center">FORMULIR PENDAFTARAN SISWA BARU</Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <fieldset className="space-y-4">
              <Typography variant="h5" className="font-semibold">A. Biodata Anak</Typography>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Nama Calon Siswa"
                  {...register('name', { required: 'Nama lengkap wajib diisi' })}
                  error={!!errors.name}
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Tempat/Tanggal Lahir"
                  {...register('birthDate', { required: 'Tempat/Tanggal lahir wajib diisi' })}
                  error={!!errors.birthDate}
                />
                {errors.birthDate && <p className="text-red-600 text-sm mt-1">{errors.birthDate.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Agama"
                  {...register('religion', { required: 'Agama wajib diisi' })}
                  error={!!errors.religion}
                />
                {errors.religion && <p className="text-red-600 text-sm mt-1">{errors.religion.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Alamat"
                  {...register('address', { required: 'Alamat wajib diisi' })}
                  error={!!errors.address}
                />
                {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="tel"
                  label="Nomor Telp/HP"
                  {...register('phone', { required: 'Nomor telepon wajib diisi', pattern: { value: /^[0-9]+$/, message: 'Nomor telepon harus berupa angka' } })}
                  error={!!errors.phone}
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Masuk Kelas"
                  {...register('grade', { required: 'Masuk kelas wajib diisi' })}
                  error={!!errors.grade}
                />
                {errors.grade && <p className="text-red-600 text-sm mt-1">{errors.grade.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Bagian (Kekhususan)"
                  {...register('specialization', { required: 'Bagian (Kekhususan) wajib diisi' })}
                  error={!!errors.specialization}
                />
                {errors.specialization && <p className="text-red-600 text-sm mt-1">{errors.specialization.message}</p>}
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <Typography variant="h5" className="font-semibold">B. Nama Orang Tua/Wali Murid</Typography>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Nama Ayah"
                  {...register('fatherName', { required: 'Nama Ayah wajib diisi' })}
                  error={!!errors.fatherName}
                />
                {errors.fatherName && <p className="text-red-600 text-sm mt-1">{errors.fatherName.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Nama Ibu"
                  {...register('motherName', { required: 'Nama Ibu wajib diisi' })}
                  error={!!errors.motherName}
                />
                {errors.motherName && <p className="text-red-600 text-sm mt-1">{errors.motherName.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Tempat/Tanggal Lahir Ayah"
                  {...register('fatherBirthDate', { required: 'Tempat/Tanggal lahir Ayah wajib diisi' })}
                  error={!!errors.fatherBirthDate}
                />
                {errors.fatherBirthDate && <p className="text-red-600 text-sm mt-1">{errors.fatherBirthDate.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Pendidikan Tertinggi"
                  {...register('education', { required: 'Pendidikan tertinggi wajib diisi' })}
                  error={!!errors.education}
                />
                {errors.education && <p className="text-red-600 text-sm mt-1">{errors.education.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Pekerjaan"
                  {...register('occupation', { required: 'Pekerjaan wajib diisi' })}
                  error={!!errors.occupation}
                />
                {errors.occupation && <p className="text-red-600 text-sm mt-1">{errors.occupation.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Alamat"
                  {...register('parentAddress', { required: 'Alamat wajib diisi' })}
                  error={!!errors.parentAddress}
                />
                {errors.parentAddress && <p className="text-red-600 text-sm mt-1">{errors.parentAddress.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="tel"
                  label="Nomor Telp/HP"
                  {...register('parentPhone', { required: 'Nomor telepon wajib diisi', pattern: { value: /^[0-9]+$/, message: 'Nomor telepon harus berupa angka' } })}
                  error={!!errors.parentPhone}
                />
                {errors.parentPhone && <p className="text-red-600 text-sm mt-1">{errors.parentPhone.message}</p>}
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <Typography variant="h5" className="font-semibold">C. Persyaratan yang diserahkan</Typography>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Foto Copy Ijazah dan Nilai"
                  {...register('certificateCopy', { required: 'Foto Copy Ijazah dan Nilai wajib diisi' })}
                  error={!!errors.certificateCopy}
                />
                {errors.certificateCopy && <p className="text-red-600 text-sm mt-1">{errors.certificateCopy.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Foto Copy Akta Kelahiran"
                  {...register('birthCertificateCopy', { required: 'Foto Copy Akta Kelahiran wajib diisi' })}
                  error={!!errors.birthCertificateCopy}
                />
                {errors.birthCertificateCopy && <p className="text-red-600 text-sm mt-1">{errors.birthCertificateCopy.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Foto Copy Kartu Keluarga"
                  {...register('familyCardCopy', { required: 'Foto Copy Kartu Keluarga wajib diisi' })}
                  error={!!errors.familyCardCopy}
                />
                {errors.familyCardCopy && <p className="text-red-600 text-sm mt-1">{errors.familyCardCopy.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Pas Foto ukuran 3x4 cm (3 lbr)"
                  {...register('photo', { required: 'Pas Foto ukuran 3x4 cm (3 lbr) wajib diisi' })}
                  error={!!errors.photo}
                />
                {errors.photo && <p className="text-red-600 text-sm mt-1">{errors.photo.message}</p>}
              </div>

              <div className="form-group">
                <Input
                  crossOrigin=""
                  type="text"
                  label="Lain-lain"
                  {...register('others', { required: 'Lain-lain wajib diisi' })}
                  error={!!errors.others}
                />
                {errors.others && <p className="text-red-600 text-sm mt-1">{errors.others.message}</p>}
              </div>
            </fieldset>

            <Button color='teal' type="submit" fullWidth className="mt-4">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
